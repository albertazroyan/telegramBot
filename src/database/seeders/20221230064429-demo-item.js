// eslint-disable-next-line strict
'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      name: 'Item',
      listId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {})
  }
}
