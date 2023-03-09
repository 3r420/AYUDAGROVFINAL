'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pregunta - archivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pregunta - archivo.init({
    id_pregunta_archivo: DataTypes.INTEGER,
    pregunta_id: DataTypes.INTEGER,
    archivo_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pregunta-archivo',
  });
  return pregunta - archivo;
};