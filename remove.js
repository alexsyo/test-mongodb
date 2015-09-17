var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/mongodb-test', function(err, db){
    var units = db.collection('units');

    units.remove({life: 10});
    db.close();
});