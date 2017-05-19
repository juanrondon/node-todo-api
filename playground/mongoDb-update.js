
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log("Connected to MongoDB server");

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("591e8d8ba7263a4a2d12d1f0")
    }, {
            $set: {
                completed: false
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    //db.close();
});