const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://cs463:cs463@cs463-f0twz.mongodb.net/EmployeeApp?retryWrites=true&w=majority",
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
