const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

/*
mongoose.connect(
  "mongodb+srv://cs463:cs463@<server>/EmployeeApp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB...");
    }
  }
);
*/

const database = require("./database.js");

/*
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String },
  phone: { type: String }
});
*/

//const Employee = mongoose.model("Employee", employeeSchema);

/*
app.post("/api/employees", (req, res) => {
  var newEmployee = new Employee(req.body);

  newEmployee.save(function(err, result) {
    if (!err) {
      res.status(200).send(result);
    } else {
      res.status(400).send(err.message);
    }
  });
});

app.get("/api/employees", (req, res) => {
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

app.get("/api/employees/:id", (req, res) => {
  Employee.findById(req.params.id, function(err, result) {
    if (!err) {
      res.status(200).send(result);
    } else {
      res.status(400).send(err.message);
    }
  });
});

app.put("/api/employees/:id", (req, res) => {
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

app.delete("/api/employees/:id", (req, res) => {
  Employee.findByIdAndDelete(req.params.id, function(err, result) {
    if (!err) {
      res.status(200).send(result);
    } else {
      res.status(200).send(err.message);
    }
  });
});

app.delete("/api/employees", (req, res) => {
  Employee.deleteMany(function(err, result) {
    if (!err) {
      res.status(200).send(result);
    } else {
      res.status(400).send(err.message);
    }
  });
});
*/

const employeeRoute = require("./routes/employee.js");
app.use("/api/employees", employeeRoute);

app.listen(8080, () => console.log("server started"));
