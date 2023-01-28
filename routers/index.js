// const { application } = require("express");
const { application } = require("express");
//const path = require("path");
const express = require("express");

const router = express.Router();
const base_controller = require("../controller/home_controller");


router.use("/user",require("./user"))
router.use("/posts",require("./posts"))
router.use("/comments",require("./comments"))
router.get("/",base_controller.home);
module.exports= router;