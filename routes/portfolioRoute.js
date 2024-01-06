const express = require("express");
const { sendEmailController } = require("../controller/portfolioControllers");

//router object
const router = express.Router();

//router
router.post('/sendEmail', sendEmailController);

//export
module.exports = router;