var path = require("path")

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(`${__dirname}/../public`, "home.html"));
    });

    app.get("/home", function (req, res) {
        res.sendFile(path.join(`${__dirname}/../public`, "home.html"))
    });

    app.get("/reservations", function (req, res) {
        res.sendFile(path.join(`${__dirname}/../public`, "reservations.html"))
    })

    app.get("/tables", function (req, res) {
        res.sendFile(path.join(`${__dirname}/../public`, "tables.html"))
    })
}
