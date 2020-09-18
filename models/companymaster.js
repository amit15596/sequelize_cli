'use strict';

module.exports = (sequelize,DataTypes)=> {
  const CompanyMaster = sequelize.define('CompanyMaster',
  {
    companyName : DataTypes.STRING,
    description: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  },{});

  CompanyMaster.associate = models =>{
    CompanyMaster.belongsTo(models.IndustryTypeMaster,{
      foreignKey: "industryId"
    });
  }
  return CompanyMaster;
};