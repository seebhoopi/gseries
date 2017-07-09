/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js Middleware for leap events application
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
let express = require('express');


let mongodb = require("mongodb");
//let db=mongodb('contactlist',['contactlist']);
let bodyParser = require("body-parser");

let MongoClient = mongodb.MongoClient;
let url = 'mongodb://localhost:27017/leapevents';
let db;

// create a new express server
let app = express();

// serve the files out of ./public as our main files


app.use(bodyParser.json());

app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


MongoClient.connect(url, function(err, database) {
    if (err) {
        console.log("Please check mongodb is running..." + err);
        process.exit(1);
    }

    db = database;
    console.log("Database connection ready ");
    app.listen(5002, '0.0.0.0', function() {
        // print a message when the server starts listening
        console.log(" Middleware server starting on " + 5002);
    });
});

app.get('/boards', function(req, res) {
    //console.log('I recevied a get request for boards');
    let collection = db.collection("boards");
    collection.find().toArray(function(err, docs) {
        if (err) throw err;
        //console.log(docs);
        res.json(docs);
    });

});

app.get('/notes', function(req, res) {
    //console.log('I recevied a get request for notes');
    let collection = db.collection("notes");
    collection.find().toArray(function(err, docs) {
        if (err) throw err;
        //console.log(docs);
        res.json(docs);
    });

});

app.get('/labtests', function(req, res) {
    //console.log('I recevied a get request for boards');
    let collection = db.collection("ordertests");
    collection.find().toArray(function(err, docs) {
        if (err) throw err;
        //console.log(docs);
        res.json(docs);
    });

});

app.put('/board/:id', function(req, res) {
    //console.log("Inside board update" );
    //console.log(req.body.lanes);
    let id = req.params.id;

    let collection = db.collection("boards");
    collection.update({ _id: id }, { $set: { "title": req.body.title, "lanes": req.body.lanes } }, function(err, doc) {
        if (err) throw err;
        res.json(doc);
    });

});

app.put('/note/:id', function(req, res) {
    //console.log("Inside note update" );
    //console.log(req.body);
    let id = req.params.id;

    let collection = db.collection("notes");
    collection.update({ _id: id }, {
        $set: {
            "task": req.body.task,
            "desc": req.body.desc,
            "edate": req.body.edate,
            "rlinks": req.body.rlinks,
            "bid": req.body.bid,
            "lid": req.body.lid
        }
    }, function(err, doc) {
        if (err) throw err;

        res.json(doc);

    });

});


app.post('/note', function(req, res) {
    //console.log(req.body);
    //console.log("Inside note create" );

    let collection = db.collection("notes");
    collection.insert(req.body, function(err, doc) {
        if (err) throw err;
        res.json(doc);
    });


});


app.post('/board', function(req, res) {
    //console.log(req.body);
    //console.log("Inside board create" );

    let collection = db.collection("boards");
    collection.insert(req.body, function(err, doc) {
        if (err) throw err;
        res.json(doc);
    });


});



app.delete('/note/:id', function(req, res) {
    //console.log("Inside note delete" );
    let id = req.params.id;
    //console.log(id);
    let collection = db.collection("notes");
    collection.remove({ _id: id }, function(err, doc) {
        if (err) throw err;
        res.json(doc);
    });


});


app.delete('/board/:id', function(req, res) {
    //console.log("Inside note delete" );
    let id = req.params.id;
    //console.log(id);

    let collection1 = db.collection("notes");
    collection1.remove({ bid: id });
    let collection = db.collection("boards");
    collection.remove({ _id: id }, function(err, doc) {
        if (err) throw err;
        res.json(doc);
    });

});

app.post('/labtest', function(req, res) {
    //console.log(req.body);
    //console.log("Inside board create" );

    let collection = db.collection("ordertests");
    collection.insert(req.body, function(err, doc) {
        if (err) throw err;
        res.json(doc);
    });


});

app.delete('/labtest/:id', function(req, res) {
    //console.log("Inside note delete" );
    let id = req.params.id;
    //console.log(id);
    let collection = db.collection("ordertests");
    collection.remove({ _id: id }, function(err, doc) {
        if (err) throw err;
        res.json(doc);
    });

});

app.put('/labtest/:id', function(req, res) {
    //console.log("Inside note update" );
    //console.log(req.body);
    let id = req.params.id;

    let collection = db.collection("ordertests");
    collection.update({ _id: id }, {
        $set: {
            "name": req.body.name,
            "age": req.body.age,
            "gender":req.body.gender,
            "email": req.body.email,
            "mobile":req.body.mobile,
            "address1":req.body.address1,
            "address2":req.body.address1,
            "address3":req.body.address1,
            "dcenter":req.body.dcenter,
            "tests":req.body.tests

        }
    }, function(err, doc) {
        if (err) throw err;

        res.json(doc);

    });

});