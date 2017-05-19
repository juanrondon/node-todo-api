
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log("Connected to MongoDB server");

    //delete many
    //delete one
    //find one and delete

    // db.collection('Todos').deleteMany({ text: 'Walk the dog' }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // }, (error) => {

    // });

    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({ name: 'Andrew' }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });
    db.collection('Users').findOneAndDelete({ _id: new ObjectID("591e77139966071898d1b290") }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });




    //db.close();

});