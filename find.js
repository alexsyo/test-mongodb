var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/mongodb-test', function(err, db){
    var units = db.collection('units');

    units.find().toArray(function(err, result) {
        console.log(result);
        db.close();
    });
});