'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    nome: DataTypes.STRING,
    img: DataTypes.STRING,
    sexo: DataTypes.STRING,
    datanas: DataTypes.DATE,
    caracteristicas: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Endereco, {foreignKey: 'id_usuario'}),
    User.hasMany(models.Analise, {foreignKey: 'id_usuario'}),
    User.hasMany(models.Pet, {foreignKey: 'id_tutor'})
  };
  return User;
};