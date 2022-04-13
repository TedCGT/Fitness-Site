//Still gotta update PDD and Lit Review
var express = require("express");
const mysql = require("mysql");
let bodyParser = require("body-parser");

var app = express();
app.use(
  bodyParser.json({
    limit: "2mb",
    parameterLimit: 100,
  })
);

//Database conn
const DBConn = mysql.createConnection({
  host: "34.77.224.93",
  user: "root",
  password: "9ec7cEz1O83tCsoF",
  database: "fitness-db",
});

//Connect with callback function to test.
DBConn.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connection established!");
  }
});

//Test Get
app.post("/register", function (req, res) {
  var regUser = req.body.Username;
  var regPass = req.body.UserPass;
  let sql = `INSERT INTO Users (Username, UserPass) VALUES ('${regUser}', '${regPass}')`;
  DBConn.query(sql, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

//POST request log's users in.
app.post(
  "/login",
  bodyParser.urlencoded({ extended: false }),
  function (req, res) {
    var user = req.body.Username;
    var pass = req.body.UserPass;
    let sql = `SELECT * FROM Users WHERE Username='${user}' AND UserPass='${pass}';`;
    DBConn.query(sql, (err, result) => {
      if (err) throw err;
      if (result === undefined || result.length === 0) {
        res.json(result);
      } else {
        res.json({ Username: user, UserPass: pass });
      }
    });
  }
);

//Server listening
app.listen(3001, function () {
  console.log("Server listening on port 3001");
});
