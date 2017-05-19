//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


// var user = { name: 'Juan', age: 37 };
// var { name } = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert Todo', error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.close();

    // db.collection('Users').insertOne({
    //     name: 'Juan Rondon',
    //     age: 37,
    //     location: "Sydney"
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to add User', error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    //db.close();


});