var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/mongodb-test', function(err, db){
    var units = db.collection('units');

    units.update(
        { life: {$gt: 0} },
        {   
            $set: {
                life: 10
            }
        }
    );

    db.close();
});
