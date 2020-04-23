'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'user1',
        password: 'user1',
        email: 'user1@toko.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user2',
        password: 'user2',
        email: 'user2@toko.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user3',
        password: 'user3',
        email: 'user3@toko.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
