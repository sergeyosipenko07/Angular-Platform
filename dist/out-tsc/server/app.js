import * as express from 'express';
import * as cors from 'cors';
var app = express();
app.use(cors());
var users = require('../users.json');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var port = 8000;
app.get('/', function (req, res) {
    res.send('Hello API');
});
app.get('/users', function (req, res) {
    res.send(users);
});
app.get('/users/:id', function (req, res) {
    var user = users.find(function (user) { return user.id === Number(req.params.id); });
    res.send(user);
});
app.post('/users/add', function (req, res) {
    var user = {
        id: 1,
        name: req.body.name,
        password: req.body.password,
        dateOfBirth: new Date(req.body.dateOfBirth),
        dateOfLogin: new Date(),
        dateOfNotification: new Date(req.body.dateOfNotification),
        information: req.body.information
    };
    users.push(user);
    res.send(user);
});
app.put('/users/:id', function (req, res) {
    var user = users.find(function (user) { return user.id === Number(req.params.id); });
    if (user) {
        user.name = req.body.name ? req.body.name : user.name;
        user.password = req.body.password ? req.body.password : user.password;
        res.sendStatus(200);
    }
    res.sendStatus(404);
});
app.delete('/users/:id', function (req, res) {
    var tmpUser = users.find(function (user) { return user.id === req.params.id; });
    if (tmpUser) {
        var userIndex = users.indexOf(tmpUser);
        users.splice(userIndex, 1);
        res.sendStatus(200);
    }
    res.sendStatus(404);
});
app.post('/login', function (req, res) {
    if (!req.body) {
        res.send('Error!!!!!!!!!!!!');
    }
    console.log(req.body);
    res.send(req.body.name + " - " + req.body.password);
});
app.listen(port, function () {
    console.log("Server successfully started on " + port + " port");
});
//# sourceMappingURL=app.js.map