const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const key = 'jwtsecretkey';
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.Subject);
            this.belongsToMany(models.Question, {
                foreignKey: 'UserId',
                through: 'Solvers',
            });
        }
    }
    User.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            profile_image: DataTypes.STRING,
            role: DataTypes.ENUM('Student', 'Instructor'),
        },
        {
            sequelize,
            modelName: 'User',
        },
    );
    User.beforeCreate(async (user, option) => {
        user.password = await bcrypt.hashSync(user.password, 10);
    });
    User.prototype.isPasswordValid = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    User.prototype.getJwtToken = function () {
        return jwt.sign({ id: this.id }, key, {
            expiresIn: '7d',
        });
    };
    return User;
};
