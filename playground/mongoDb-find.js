
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').find({ completed: false }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //     console.log('Unable to fetch todos', error);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count', count);        
    // }, (error) => {
    //     console.log('Unable to fetch todos', error);
    // });

    db.collection('Users').find({ name: "Juan Rondon" }).toArray()
        .then((results) => {
            console.log(JSON.stringify(results, undefined, 2));
        }, (error) => {
            console.log('No users with that name');
        });


    //db.close();

});