'use strict';
module.exports = (sequelize,DataTypes)=> {
  const SkillSetMaster = sequelize.define('SkillSetMaster',
  {
    title : DataTypes.STRING,
    description: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  },{});
  return SkillSetMaster;
};
