const mongoose = require("mongoose");

var assignmentSchema = mongoose.Schema({
    courseName: String,
	assignmentname: {
		type: String,
		required: true
	},
    dueDate:Date,
});

var assignment = module.exports = mongoose.model("assignment2", assignmentSchema);
module.exports.get = function (callback, limit) {
	assignment.find(callback).limit(limit);
}