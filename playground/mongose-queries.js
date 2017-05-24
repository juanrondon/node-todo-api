const { mongose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');
const { ObjectId } = require('mongodb');

var id = '5924e21a269fd509ecd8428511';

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

//validate ID
if (!ObjectId.isValid(id)) {
    console.log('Id not valid');
}

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by Id', todo);
}).catch((error) => {
    console.log(error);
});

User.findById('5924e71b20ada5710b401fc4').then((user) => {
    if (!user) {
        console.log('Unable to find user');
    }
    console.log('User by Id: ', user);
}).catch((error) => {
    console.log(error);
})
