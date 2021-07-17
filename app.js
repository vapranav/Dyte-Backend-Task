const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));

const { ServiceBroker } = require("moleculer");
const { Sequelize } = require('sequelize');
let broker = new ServiceBroker({ logger: console });

const db = require("./config/database")

db.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));
 
db.sync()

//drop table and recreate it.
//db.sync(({force:true))

app.get("/", (req, res) => {
    res.send("Index");
})

app.use('/webhooks', require('./routes/webhook.routes'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
