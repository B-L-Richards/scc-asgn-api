let router = require("express").Router();
var controller = require("./asgn-controller.js");

router.get("/", function (req, res) {
	res.json({
		status: "API is Working.",
		message: "Welcome to the Assignment API."
	});
});

router.route("/assignment")
	.get(controller.index)
	.post(controller.new);

router.route("/assignment/:assignment_id")
	.get(controller.view)
	.put(controller.update)
	.delete(controller.delete);

module.exports = router;