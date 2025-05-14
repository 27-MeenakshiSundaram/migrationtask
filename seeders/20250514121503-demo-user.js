'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('product',[
    {
      name:"eat a frog",
      price:"400",
      stock:"23"
    },
    {
      name:"Dhoni",
      price:"400",
      stock:"23"
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pproduct',null,{});
  }
};
