"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("artist", [
      {
        name: "Bring Me The Horizon",
        old: 30,
        category: "Band",
        startCareer: "2020-12-12",
        thumbnail: "bmth.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bullet For My Valentine",
        old: 34,
        category: "Band",
        startCareer: "2020-12-12",
        thumbnail: "bfmv.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Megadeth",
        old: 60,
        category: "Band",
        startCareer: "1989-09-09",
        thumbnail: "megadeth.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
