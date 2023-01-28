const express = require("express");
const passport = require("passport");
const router = express.Router();
const commentcontroller= require("../controller/comment_controller");
router.post("/create",passport.check_authentication,commentcontroller.create);
router.get("/destroy/:id",passport.check_authentication,commentcontroller.destroy);
module.exports = router;