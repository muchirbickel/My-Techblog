var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var techblog = require("../models/techblog.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    techblog.all(function(data) {
    var hbsObject = {
        techblogs: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/techblogs", function(req, res) {
  techblog.create([
    "techblog_name", "devoured"
  ], [
    req.body.techblog_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/techblogs/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  techblog.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/techblogs/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  techblog.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
