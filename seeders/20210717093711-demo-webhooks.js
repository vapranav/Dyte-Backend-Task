'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example: */
     await queryInterface.bulkInsert('webhooks', [{
     targetUrl: "https://floating-fjord-11517.herokuapp.com/847/665",
     createdAt: new Date(),
     updatedAt: new Date()
     }, 
     {
      targetUrl: "https://floating-fjord-11517.herokuapp.com/432/645",
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      targetUrl: "https://floating-fjord-11517.herokuapp.com/462/835",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      targetUrl: "https://floating-fjord-11517.herokuapp.com/822/645",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      targetUrl: "https://floating-fjord-11517.herokuapp.com/200/300",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      targetUrl: "https://floating-fjord-11517.herokuapp.com/245/300",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      targetUrl: "https://floating-fjord-11517.herokuapp.com/245/356",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      targetUrl: "https://floating-fjord-11517.herokuapp.com/300/456",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      targetUrl: "https://floating-fjord-11517.herokuapp.com/356/376",
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      targetUrl:  "https://floating-fjord-11517.herokuapp.com/423/657",
      createdAt: new Date(),
      updatedAt: new Date()
     }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Webhooks', null, {});
     
  }
};
