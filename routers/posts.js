const express = require("express");
const passport = require("passport");
const router = express.Router();
const postcontroller= require("../controller/post_controller");

router.post("/create",passport.check_authentication,postcontroller.create);
router.get("/destroy/:id",passport.check_authentication,postcontroller.destroy);
module.exports = router;
