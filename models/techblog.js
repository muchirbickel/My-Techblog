// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var techblog = {
  all: function(cb) {
    orm.all("techblogs", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("techblogs", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("techblogs", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("techblogs", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller.
module.exports = techblog;
