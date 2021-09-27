'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Subject);
      this.hasMany(models.Explanation);
      this.hasMany(models.Testcase);
      this.belongsToMany(models.User,{
        foreignKey: 'QuestionId',
        through: 'Solvers'
      });
    }
  };
  Question.init({
    question_text: DataTypes.TEXT,
    example: DataTypes.TEXT,
    function_description: DataTypes.STRING,
    return: DataTypes.STRING,
    input_format: DataTypes.TEXT,
    output_format: DataTypes.TEXT,
    constraint: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};