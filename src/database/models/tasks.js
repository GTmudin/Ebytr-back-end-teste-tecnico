
// initial setup generated by sequelize-cli (https://github.com/sequelize/cli)
// modified by me(Andrey Novaes)

module.exports = (sequelize, DataTypes) => {  
    const Tasks = sequelize.define('Tasks', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
  }, {
    timestamp: true,
    underscored: false,
  });
  Tasks.associate = function (models) {
    // associations can be defined here
  };
  return Tasks;
}
