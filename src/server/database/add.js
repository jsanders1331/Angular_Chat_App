var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("users");
  var myobj = [
    {
      Users: [
        {
          username: "John",
          birthdate: "01/02/03",
          age: 5,
          email: "john@123",
          password: "123",
          valid: false,
          role: "admin",
          group: "3",
        },
        {
          username: "Joe",
          birthdate: "01/02/03",
          age: 5,
          email: "joe@123",
          password: "123",
          valid: false,
          role: "user",
          group: "1",
        },
        {
          username: "Billy",
          birthdate: "01/02/03",
          age: 5,
          email: "Billy@123",
          password: "123",
          valid: false,
          role: "user",
          group: "2",
        },
      ],
    },
  ];
  dbo.collection("data").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
