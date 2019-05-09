'use strict';
module.exports = (sequelize, DataTypes) => {
  const Analise = sequelize.define('Analise', {
    id_usuario: DataTypes.INTEGER,
    nota: DataTypes.DOUBLE,
    obs: DataTypes.STRING
  }, {});
  Analise.associate = function(models) {
    Analise.belongsTo( models.User, {foreignKey: 'id_usuario'})
  };
  return Analise;
};