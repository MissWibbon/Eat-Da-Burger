// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM burgers";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a Burger
  app.post("/api/new", function(req, res) {
    console.log("Burger Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO burgers (author, body, created_at) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.burger_name, req.body.devoured], function(err, result) {
      if (err) throw err;
      console.log("Burger was successfully added");
      res.end();
    });
  });
};
