const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Solver extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Question);
            this.belongsTo(models.User);
        }
    }
    Solver.init(
        {
            plag_score: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Solver',
        },
    );
    return Solver;
};
