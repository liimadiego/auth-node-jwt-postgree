'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersData = [
      {
        first_name: 'Diego',
        last_name: 'Lima',
        email: 'diegolima.sao@gmail.com',
        password: await bcrypt.hash('1234', 10),
        user_type: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('users', usersData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
