const express = require("express");
const router = express.Router();
const {getdashoboardInfo, postdashoboardInfo} = require("../../controllers/dashboard/dashboard.controllers");
router.route('/').get(getdashoboardInfo).post(postdashoboardInfo);

module.exports = router;