const express = require("express");
const router = express.Router();
const passport = require("passport");
const config = require("../config/passport_local");

const user = require("../controller/user_control");
router.get("/",user.profile);
router.get("/profile/:id",passport.check_authentication,user.profile);
router.post("/update/:id",passport.check_authentication,user.update);
router.get("/sign-in",user.sign_in);
router.get("/sign-up",user.sign_up);
router.post("/create",user.create);
router.get("/sign-out",user.sign_out);
router.post("/create_session", passport.authenticate(
    "local",
    {failureRedirect:"/user/sign-in"}
),user.create_session);

module.exports = router;