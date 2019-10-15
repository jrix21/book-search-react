const router = require("express").Router();
const googleController = require("../../controllers/googleController.js");

// Matches with "/api/books"
router.route("").get(googleController.bookQuery);

module.exports = router;
