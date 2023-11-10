const express = require("express");
const mongoose = require("mongoose");
const employees = require("./model/employees");
const bodyParser = require("body-parser");
// application using the express modules
const app = express();

// app.use(bodyParser.json()) // a middleware
app.use(bodyParser.json());
// conneting to the database, DB name.
mongoose.connect("mongodb://localhost:27017/employeeDB");

app.get("/", (req, res) => {
  res.send("welcome to HomePage of the server");
});

app.get("/employees", async (req, res) => {
  try {
    const user = await employees.find({});
    console.log("data feteched from DB");
    res.json(user);
  } catch (error) {
    console.log("error while fetching tha data from the database");
  }
});
// API for adding the data into the database.
app.post("/addEmployee", async (req, res) => {
  try {
    const { name, city, stack, salary } = req.body;
    // make the instance of the employeeSchema here... new (scheme name here)
    const newEmployee = new employees({ name, city, stack, salary });
    const savedEmployee = await newEmployee.save();
    res.json(savedEmployee);
  } catch (error) {
    // console.log("error",error);
    res.status(500).json({ error: "internal server error" });
  }
});

// server on port 3000
app.listen(3000, () => {
  console.log("server started at port:3000");
});

