const express = require('express');
const app = express();

let users = require('./users');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //правильно парсить json, переданный в body
app.use(bodyParser.urlencoded({extended: true})); //правильно парсить данные формы

const port = 8000;


app.get('/', (req, res) => {
    res.send('Hello API');
});


app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/users/:id', (req, res) => {
    console.log(req.params);
    let user = users.find(function (user) {
        return user.id == req.params.id;
    });
    res.send(user);
});

app.post('/users/add', (req, res) => {
    let user = {
        id: Date.now(),
        name: req.body.name,
        password: req.body.password,
        dateOfBirth: new Date(req.body.dateOfBirth).toISOString(),
        dateOfFirstLogin: Date.now(),
        dateOfNextNotification: new Date(req.body.dateOfNextNotification).toISOString(),
        information: req.body.information
    };
    users.push(user);
    res.send(user);
});

app.put('/users/:id', (req, res) => {
    let user = users.find(function (user) {
        return user.id == req.params.id;
    });
    user.name = req.body.name;
    res.sendStatus(200);
});

app.delete('/users/:id', (req, res) => {
    users = users.filter((user) => {
        return user.id != req.params.id;
    });
    res.sendStatus(200);
});

app.listen(port, function () {
    console.log(`Server successfully started on ${port} port`);
});