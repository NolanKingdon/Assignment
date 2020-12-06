const express = require('express');
const apiV1 = express.Router();
const luhn = require('luhn');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

/**
 * Basic API routing. Wanted to leave this in it's own route module for ease 
 * of extending it in the future.
 * 
 * example: localhost:3001/api/v1/purchase
 * 
 * Uses luhn check to validate credit card number and responds with a 200 or 400 accordingly.
 */
apiV1.post('/purchase', jsonParser, (req, res) => {
    let valid = luhn.validate(req.body.cardNumber);

    if (valid) {
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

module.exports = apiV1;
