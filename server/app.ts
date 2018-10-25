import * as express from "express";
const app = express();

interface User {
    id: number;
    name: string;
    password: string;
    dateOfBirth: Date;
    dateOfFirstLogin: Date;
    dateOfNextNotification: Date;
    information: string;
}

const users: User[] = require('../users.json');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello API');
});

app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === Number(req.params.id));
    res.send(user);
});

app.post('/users/add', (req, res) => {
    const user = {
        id: 1,
        name: req.body.name,
        password: req.body.password,
        dateOfBirth: new Date(req.body.dateOfBirth),
        dateOfFirstLogin: new Date(),
        dateOfNextNotification: new Date(req.body.dateOfNextNotification),
        information: req.body.information
    };
    users.push(user);
    res.send(user);
});

app.put('/users/:id', (req, res) => {
    const user = users.find(user => user.id === Number(req.params.id));
    if (user) {
        user.name = req.body.name ? req.body.name: user.name;
        user.password = req.body.password ? req.body.password: user.password;
        res.sendStatus(200);
    }
    res.sendStatus(404);
});

app.delete('/users/:id', (req, res) => {
    const tmpUser = users.find((user: User) => user.id == req.params.id);
    if (tmpUser) {
        const userIndex = users.indexOf(tmpUser);
        users.splice(userIndex, 1);
        res.sendStatus(200);
    }
    res.sendStatus(404);
});


app.listen(port, function () {
    console.log(`Server successfully started on ${port} port`);
});