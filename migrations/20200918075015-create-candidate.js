'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Candidate', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    middleName: {
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    lastName: {
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    birthDate: {
        type: Sequelize.DATEONLY,
        allowNull: true,
    },
    gender: {
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    pa_address1: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    pa_address2: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    pa_city: {
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    pa_state: {
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    pa_country: {
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    pa_zip: {
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    ca_address1: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    ca_address2: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    ca_city: {
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    ca_state: {
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    ca_country: {
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    ca_zip: {
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    email1: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    email2: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    contactNo1: {
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    contactNo2: {
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    aadharNo: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true,
    }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Candidate');
  }
};