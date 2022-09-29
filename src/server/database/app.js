var mongo = require("mongodb");

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
  // doesnt actually create until it has content
  if (err) throw err;
  var dbo = db.db("mydb");
  console.log("Database created!");
  dbo.createCollection("products", function (err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
*/
