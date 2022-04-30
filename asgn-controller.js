const assignment = require("./asgn-model");

/* Get ll Assignments */
exports.index = function (req, res) {
	Assignments.get(function (err, Assignments) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "success",
			message: "All assingments retrieved.",
			data: Assignments
		});
	});
}

/* New Assignment */
exports.new = function (req, res) {
    var assignment = new Assignment();
    assignment.courseName = req.body.courseName;
    assignment.assignmentName = req.body.assignmentName;
    assignment.dueDate = req.body.dueDate;
    assignment.save(function (err) {
        if (err) {
            res.json(err);
		}
		res.json({
            message: 'Assignment saved!',
            data: assignment
        });
    });
};

/* Find Assignment */
exports.view = function (req, res) {
    assignment.findById(req.params.assignment_id, function (err, assignment) {
        if (err) {
            res.send(err);
		}
        res.json({
            message: 'Finding Assignment',
            data: assignment
        });
    });
};

/* Update Assignment */
exports.update = function (req, res) {
	assignemt.findById(req.params.assignment_id, function (err, assignment) {
        if (err) {
            res.send(err);
		}
		assignment.courseName = req.body.courseName;
    assignment.assignmentName = req.body.assignmentName;
    assignment.dueDate = req.body.dueDate;
        assignment.save(function (err) {
            if (err) {
                res.json(err);
			}
            res.json({
                message: 'assignment Info updated',
                data: assignment
            });
        });
    });
};

/* Delete Assignment */
exports.delete = function (req, res) {
    assignment.remove({
        _id: req.params.assignment_id
    }, function (err, assignment) {
        if (err) {
            res.send(err);
		}
		res.json(
			{
				status: "success",
				message: 'assignment deleted'
			});
    });
};