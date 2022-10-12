const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http").Server(app);
const https = require("https");
const fs = require("fs");
const multer = require("multer");
const PORT = 3000;
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
  },
});
const sockets = require("./socket/socket.js");
const server = require("./socket/listen.js");

sockets.connect(io, PORT);
server.listen(http, PORT);

app.use(cors());

app.use(express.static(__dirname + "/uploads")); // for the image directory

// MONGOOSE
/*
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/node-file-upl", {
  useNewUrlParser: true,
});
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});
conn.on("disconnected", function () {
  console.log("database is disconnected successfully");
});
conn.on("error", console.error.bind(console, "connection error:"));

var imageSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});
*/

// STORAGE
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "uploads");
  },
  filename: (req, file, callBack) => {
    callBack(null, `${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

//let upload = multer({ dest: 'uploads/' })

app.post("/file", upload.single("file"), (req, res, next) => {
  const file = req.file;
  console.log(file.filename);
  if (!file) {
    const error = new Error("No File");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});

app.post("/multipleFiles", upload.array("files"), (req, res, next) => {
  const files = req.files;
  console.log(files);
  if (!files) {
    const error = new Error("No File");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send({ sttus: "ok" });
});

// MONGOOSE

const readUser = require("./database/read");
/*
var jsonFile = fs.readFileSync("./users.txt").toString("utf-8");
jsonFile = JSON.parse(jsonFile);
var users = jsonFile.Users;
*/
var users;
var getUsers = async function () {
  let x;
  x = await readUser();
  return Promise.all(x);
};
users = getUsers();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

/*
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
*/
// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  console.log(users);
  users.then((data) => console.log(data));
  console.log("Server is running at port", PORT);
  res.send("hello world");
});

app.post("/api/auth", async (req, res) => {
  // make the call asynchronous
  console.log(req.body); // communication
  var users = await getUsers();
  console.log(users[0].Users);
  users = users[0].Users;

  const user_data = users.find(
    (user) =>
      user.username == req.body.username && user.password == req.body.password
  ); // check for authentication, will return undefined if not found, .find uses testing function.
  idx = users.findIndex((user) => user.username == req.body.username); // index that this was found.

  if (user_data) {
    // the user data was found by the .find method
    users[idx].valid = true; // edit original data
    res.send(users); // send data back
    users[idx].valid = false; //reset data to false.
  } else if (!user_data) res.send(users); // debugging
});
