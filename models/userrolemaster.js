'use strict';
module.exports = (sequelize,DataTypes)=> {
  const UserRoleMaster = sequelize.define('UserRoleMaster',
  {
    roleName : DataTypes.STRING,
    roleDescription: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  },{});
  return UserRoleMaster;
};