'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    id_tutor: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    img: DataTypes.STRING,
    caracteristicas: DataTypes.STRING,
    raca: DataTypes.STRING,
    especie: DataTypes.STRING,
    sexo: DataTypes.STRING,
    datanas: DataTypes.DATE,
    peso: DataTypes.DOUBLE
  }, {});
  Pet.associate = function(models) {
    Pet.belongsTo( models.User, {foreignKey: 'id_tutor'})
  };
  return Pet;
};