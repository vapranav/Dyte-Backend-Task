const Sequelize = require("sequelize");
const db = require("../config/database");

const Webhook = db.define('webhook', {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    targetUrl: {
        type: Sequelize.STRING,
        allowNull:false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});

module.exports = Webhook;
