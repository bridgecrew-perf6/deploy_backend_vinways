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
          "$2y$12$.cixhrZP//Fxjn8acIe89uTLounOrTtGPteB4VVpCImJMnjAlrpL2 ",
        status: "active",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Oliver Sykes",
        email: "member@test.com",
        password:
          "$2y$12$TtqqDedruUjJ75h6lI6yVOD75yk8ja1KQxRhl/yd6DBk8LOuUIXMO ",
        status: "active",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Jordan Fish",
        email: "notmember@test.com",
        password:
          "$2y$12$HlhBUeeJ5sAtg3y9Ue6VY.A/lcgbDzwpnMfjVyHyposXD4Q0wsgGu ",
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
