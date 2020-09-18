'use strict';
module.exports = (sequelize,DataTypes)=> {
  const Candidate = sequelize.define('Candidate',
  {
    firstName : DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDate:DataTypes.DATEONLY,
    gender:DataTypes.STRING,
    pa_address1:  DataTypes.STRING,
    pa_address2: DataTypes.STRING,
    pa_city: DataTypes.STRING,
    pa_state: DataTypes.STRING,
    pa_country: DataTypes.STRING,
    pa_zip: DataTypes.STRING,
    ca_address1:DataTypes.STRING,
    ca_address2:DataTypes.STRING,
    ca_city:DataTypes.STRING,
    ca_state:DataTypes.STRING,
    ca_country:DataTypes.STRING,
    email1:DataTypes.STRING,
    email2:DataTypes.STRING,
    contactNo1:DataTypes.STRING,
    contactNo2: DataTypes.STRING,
    aadharNo: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  },{});

  Candidate.associate = models =>{
    Candidate.hasMany(models.CandidateWorkHistory,{
      foreignKey: "candidateId"
    });
    Candidate.hasMany(models.CandidateTrainingCert,{
       foreignKey: "candidateId" 
    });
  }
  return Candidate;
};
