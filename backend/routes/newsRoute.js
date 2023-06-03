const express = require('express');
const { sendTopNews, sendEveryNews } = require('../Controllers/newsController')

const router = express.Router();

router.route("/top-headlines").get(sendTopNews);
router.route("/everything").get(sendEveryNews);

module.exports = router;