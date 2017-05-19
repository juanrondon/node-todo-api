const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//Model for Todo
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLenght: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var User = mongoose.model('User', {
    email: {
        type: String,
        minLenght: 1,
        required: true,
        trim: true
    }
});

var newUser = new User({
    email: '     juan@me.com    '
})

newUser.save().then((doc) => {
    console.log('Saved user', doc);
}, (error) => {
    console.log('Unable to save user', error);
});

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved Todo', doc);
// }, (error) => {
//     console.log('Unable to save Todo');
// });

// var newTodo = new Todo({
//     text: 'Feed dog',
// });

// newTodo.save().then((doc) => {
//     console.log('Saved Todo', doc);
// }, (error) => {
//     console.log('Unabe to save todo');
// })


