const mongoose = require("mongoose");

let employeeScheme = new mongoose.Schema({
    // dont pass id in the scheme else it will cause the errors..
    // _id: mongoose.Schema.Types.ObjectId,
    name: String,
    city: String,
    stack: String,
    salary: Number
});
// fileName, scheme variable
module.exports = mongoose.model("employees", employeeScheme);