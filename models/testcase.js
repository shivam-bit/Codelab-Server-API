'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Testcase extends Model {
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
  Testcase.init({
    test_input: DataTypes.TEXT,
    test_output: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Testcase',
  });
  return Testcase;
};