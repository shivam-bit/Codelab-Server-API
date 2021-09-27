'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Explanation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Question);
    }
  };
  Explanation.init({
    sample_input: DataTypes.STRING,
    sample_output: DataTypes.STRING,
    explanation_statment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Explanation',
  });
  return Explanation;
};