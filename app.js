
const mailer = require('./services/mailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = new express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/status', (req, res) => {
    res.status(200).send({ status: 'success' });
});

app.post('/emailing', (req, res) => {

    mailer.sendMail({...req.body})
        .then(result => res.status(200).send({
             message: result
        }))
        .catch(err => res.status(200).send({
             message: err 
        }));    
});

module.exports = app;