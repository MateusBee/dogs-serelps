'use strict';
module.exports = (sequelize, DataTypes) => {
  const Endereco = sequelize.define('Endereco', {
    id_usuario: DataTypes.INTEGER,
    rua: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cep: DataTypes.STRING,
    complemento: DataTypes.STRING,
    numero: DataTypes.INTEGER
  }, {});
  Endereco.associate = function(models) {
    Endereco.belongsTo( models.User, {foreignKey: 'id_usuario'})
  };
  return Endereco;
};