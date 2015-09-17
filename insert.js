var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/mongodb-test', function(err, db){
    var units = db.collection('units');

    units.insert({
        id: 1,
        name: 'Peasant',
        attack: 5,
        defence: 0,
        range: 1,
        life: 10
    });
    units.createIndex(
        { 'id': 1 }, { unique: true }
    );

    units.insert({
        id: 2,
        name: 'Swordsman',
        attack: 15,
        defence: 10,
        range: 1,
        life: 20
    });
    units.createIndex(
        { 'id': 2 }, { unique: true }
    );
    
    units.insert({
        id: 3,
        name: 'Archer',
        attack: 10,
        defence: 5,
        range: 5,
        life: 10
    });
    units.createIndex(
        { 'id': 3 }, { unique: true }
    );
    
    db.close();
});