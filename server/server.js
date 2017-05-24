const express = require('express');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (error) => {
        res.status(400).send(error);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (error) => {
        res.status(400).send(error);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(404).send({
            error: 'Invalid Id'
        });
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send({
                error: 'Todo not found'
            });
        }
        res.send({ todo });
    }).catch((error) => {
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(404).send({
            error: 'Invalid Id'
        });
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send({
                error: 'Todo not found'
            });
        }
        res.send({
            todo: todo
        });
    });
});


app.listen(port, () => {
    console.log(`Started on port: ${port}`);
});

module.exports = {
    app
};