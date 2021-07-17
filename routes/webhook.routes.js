const express = require("express");
const router = express.Router();
const { ServiceBroker } = require("moleculer");
let broker = new ServiceBroker({ logger: console });

/* broker loads the services and starts listening to requests */

broker.loadService("services/webhooks.service");

broker.start();

/* All the APIs below calls the actions of a service and returns the result */

/*
Returns list of webhooks
*/

router.get('/list', (req, res) => {
    const main = async () => {
        try {
            let response = await broker.call("webhooks.list")
            res.send(JSON.stringify(response, null, 2))
        } catch (err) {
            console.log(err);
        }
    }
    main();
})

/*
Returns ID of newly created webhook.

params: targetUrl = string
*/

router.post('/register', (req, res) => {
    let targetUrl = req.body.targetUrl;
    const main = async () => {
        try {
            let response = await broker.call("webhooks.register", { targetUrl: targetUrl })
            console.log(response);
            res.send(JSON.stringify(response, null, 2))
        } catch (error) {
            console.log(error);
        }  
    }
    main()
})

/* 
Updates targetUrl and returns 200 status code

params: id = number
*/

router.put("/update", (req, res) => {
    let id = req.body.id;
    let targetUrl = req.body.targetUrl;
    const main = async () => {
        try {
            let response = await broker.call("webhooks.update", { id: id,targetUrl: targetUrl})
            if(!response)
                throw new Error("ID not found");
            res.sendStatus(200);
        } catch(error) {
            res.sendStatus(404)
            console.log(error);
        }
    }
    main();
})

/*
Deletes specified webhook and returns 200 status code

params: id = number
*/

router.delete("/delete", (req, res) => {
    let id = req.body.id;
    const main = async() => {
        try {
            let response = await broker.call("webhooks.delete", {id: id})
            if(!response)
                throw new Error("ID Not found")
            res.sendStatus(200);
        } catch (error) {
            res.sendStatus(404)
            console.log(error);
        }
    }
    main();
})

/* 
Sends POST request to all targetUrls in parallel and returns JSON response. 

params: ip = string
*/

router.get("/ip", (req, res) => {
    let ip = req.body.ip;
    const main = async() => {
        try {
            let response = await broker.call("webhooks.trigger", {ip: ip});
            res.send(response);
        } catch (error) {
            res.sendStatus(404)
            console.log(error);
        }
    }
    main();
})

module.exports = router;