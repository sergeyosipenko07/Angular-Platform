import * as express from 'express';
import * as cors from 'cors';

const app = express();
app.use(cors());

interface User {
  id: number;
  name: string;
  password: string;
  age: string;
  dateOfBirth: string;
  dateOfLogin: string;
  dateOfNotification: string;
  information: string;
}

const users: User[] = require('../users.json');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 8000;
app.listen(port, function () {
  console.log(`Server successfully started on ${port} port`);
});


app.get('/', (req, res) => {
  res.send('Hello API');
});

app.get('/users', (req, res) => {
  res.send(users);
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
    age: req.body.age,
    dateOfBirth: req.body.dateOfBirth,
    dateOfLogin: req.body.dateOfLogin,
    dateOfNotification: req.body.dateOfNotification,
    information: req.body.information
  };
  users.push(user);
  res.send(user);
});

app.put('/users/:id', (req, res) => {
  console.log(req.body);
  const user = users.find(user => user.id === Number(req.params.id));
  if (user) {
    user.name = req.body.name ? req.body.name : user.name;
    user.password = req.body.password ? req.body.password : user.password;
    user.age = req.body.age ? req.body.age : user.age;
    user.dateOfBirth = req.body.dateOfBirth ? new Date(req.body.dateOfBirth).toISOString() : user.dateOfBirth;
    user.dateOfLogin = req.body.dateOfLogin ? new Date(req.body.dateOfLogin).toISOString() : user.dateOfLogin;
    user.dateOfNotification = req.body.dateOfNotification ? new Date(req.body.dateOfNotification).toISOString() : user.dateOfNotification;
    user.information = req.body.information ? req.body.information : user.information;
    res.send(user);
  }
  res.sendStatus(404);
});

app.delete('/users/:id', (req, res) => {
  const tmpUser = users.find((user: User) => user.id === req.params.id);
  if (tmpUser) {
    const userIndex = users.indexOf(tmpUser);
    users.splice(userIndex, 1);
    res.sendStatus(200);
  }
  res.sendStatus(404);
});


app.post('/login', (req, res) => {
  if (req.body) {
    const user = findUserByNamePassword(req.body.name, req.body.password);
    console.log(user);
    setTimeout(() => {
      res.send(user);
    }, 3000);
  }
});

app.post('/password', (req, res) => {
  if (req.body) {
    const user = findUserByName(req.body.name);
    console.log(user);
    if (user) {
      res.send(user);
    }
  }
  res.sendStatus(400);
});

app.post('/users-search', (req, res) => {
  if (req.body !== '') {
    console.log(req.body);
    const filteredUsers = users.filter((user: User) => {
      return (user.name.toLowerCase()).includes(req.body.name.toLowerCase());
    });
    console.log(filteredUsers);
    res.send(filteredUsers);
  }
  res.send(users);
});


function findUserByNamePassword(name: string, password: string) {
  return users.find((user: User) => user.name === name && user.password === password);
}

function findUserByName(name: string) {
  return users.find((user: User) => user.name === name);
}
