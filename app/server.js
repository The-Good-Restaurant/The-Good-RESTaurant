const express = require("express");
const path = require("path");

const reservedTables = require("./waitingList.js");
const waitingList = require("./tableData");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", function (req, res) {
//     res.sendFile(path.join(`${__dirname}/../public`, "home.html"));
// });

// // Displays all characters
// app.get("/reservations", function (req, res) {
//     res.sendFile(path.join(`${__dirname}/../public`, "reservations.html"));
//     // return res.json(waitingList);
// });

// // Displays a single character, or returns false
// app.get("/tables", function (req, res) {
//     res.sendFile(path.join(__dirname, "tables.html"));
//     // return res.json(reservedTables);
// });


app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
  