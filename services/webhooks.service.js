const db = require("../config/database");
const Webhook = require("../models/Webhook");
const request = require('request');
const async = require("async")


module.exports = {
    name: "webhooks",
    actions: {
        async register(ctx) {
            let targetUrl = ctx.params.targetUrl;
            const webhook = await Webhook.create({ targetUrl: targetUrl });
            return webhook;
        },

        async update(ctx) {
            const webhook = await Webhook.findOne({where: {id: ctx.params.id}})
            if(!webhook)
                console.log("ID not found");
            webhook.targetUrl = ctx.params.targetUrl;
            await webhook.save();
            return webhook;
        },

        async list(ctx) {
            const webhooks = await Webhook.findAll();
            return webhooks;
        }, 

        async delete(ctx) {
                const webhook = await Webhook.destroy({where: {id: ctx.params.id}})
                return webhook;
        },
        /*
        Gets list of URLS and uses Promise.all() to return a single Promise that resolves when all of the promises passed as an iterable have resolved. 
        Implemented from https://www.codementor.io/@adititipnis/javascript-how-to-make-api-calls-for-each-value-in-an-array-and-get-an-array-of-results-v1sfcj11o
        */
        async trigger(ctx) {
            const webhooks = await Webhook.findAll();
            let urls = []   
            //create list of urls
            webhooks.forEach(element => {
                urls.push(element.dataValues.targetUrl)
            });
            var products = []

            // create list of promises
            let requests = urls.map(url => {
                return new Promise((resolve, reject) => {
                    request({
                        uri: url,
                        method: 'POST'
                    },
                    (err, res, body) => {
                        if(err) { reject(err)}
                        resolve(body)
                    })
                })
            })
            //resolve each promise
            Promise.all(requests).then((body) => {
                body.forEach(res => {
                    if(res)
                        products.push(JSON.parse(res))
                })
                console.log(products);
            }).catch(err => console.log(err)) 
        }
    }
}
