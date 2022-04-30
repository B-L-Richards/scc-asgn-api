let express = require('express')
let app = express();
const apiRouter = require("./api-router.js");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

// set up mongoose and body-parser
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

// connect to mongoose
mongoose.connect("mongodb://localhost/assignment", { useNewUrlParser: true});
var db = mongoose.connection;

if(!db) {
    console.log("Error connecting to the DB.");
} else {
    console.log("DB connected successfully");
}

var port = 8080;

app.use("/asgn-api", apiRouter);

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, function () {
    console.log("Running assignment-api on port " + port);
});