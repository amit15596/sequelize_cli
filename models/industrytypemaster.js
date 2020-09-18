'use strict';

module.exports = (sequelize,DataTypes)=> {
  const IndustryTypeMaster = sequelize.define('IndustryTypeMaster',
  {
    title : DataTypes.STRING,
    description: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  },{});

  IndustryTypeMaster.associate = models =>{
    IndustryTypeMaster.hasMany(models.IndustrySkillCategory,{
      foreignKey: "industryId"
    });
    IndustryTypeMaster.hasMany(models.CompanyMaster,{
      foreignKey: "industryId"
    });
  }
  return IndustryTypeMaster;
};