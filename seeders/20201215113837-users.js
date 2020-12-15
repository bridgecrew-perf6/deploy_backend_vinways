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
    await queryInterface.bulkInsert("Users", [
      {
        fullName: "Muhammad Rydwan",
        email: "admin@test.com",
        password:
          "$2b$10$VYyJquJD80a3veq4jL5Oa.JuRgGKHc6gtn7hskBJHG1CdyUWvz63C",
        status: "active",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Oliver Sykes",
        email: "member@test.com",
        password:
          "$2b$10$VYyJquJD80a3veq4jL5Oa.JuRgGKHc6gtn7hskBJHG1CdyUWvz63C",
        status: "active",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Jordan Fish",
        email: "notmember@test.com",
        password:
          "$2b$10$VYyJquJD80a3veq4jL5Oa.JuRgGKHc6gtn7hskBJHG1CdyUWvz63C",
        status: "not active",
        role: "user",
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
