const express = require("express");
const Employee = require("../models/employee.js");
const bcrypt = require("bcrypt");

const router = express.Router();

//replace "/api/employees" with "/""

router.post("/", (req, res) => {
  var newEmployee = new Employee(req.body);

  newEmployee.save(function(err, result) {
    if (!err) {
      res.status(200).send(result);
    } else {
      res.status(400).send(err.message);
    }
  });
});

router.get("/", (req, res) => {
  if (req.query.filter) {
    req.query.filter = JSON.parse(req.query.filter);
  }

  Employee.find(req.query.filter).exec(function(err, result) {
    if (!err) {
      res.status(200).send(result);
    } else {
      res.status(400).send(err.message);
    }
  });
});

router.get("/:id", (req, res) => {
  Employee.findById(req.params.id, function(err, result) {
    if (!err) {
      res.status(200).send(result);
    } else {
      res.status(400).send(err.message);
    }
  });
});

router.put("/:id", (req, res) => {
  Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    },
    function(err, result) {
      if (!err) {
        res.status(200).send(result);
      } else {
        res.status(400).send(err.message);
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  Employee.findByIdAndDelete(req.params.id, function(err, result) {
    if (!err) {
      res.status(200).send(result);
    } else {
      res.status(200).send(err.message);
    }
  });
});

router.delete("/", (req, res) => {
  Employee.deleteMany(function(err, result) {
    if (!err) {
      res.status(200).send(result);
    } else {
      res.status(400).send(err.message);
    }
  });
});

module.exports = router;
