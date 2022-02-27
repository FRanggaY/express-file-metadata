const express = require('express')
const router = express.Router();
const multer = require("multer");

const {
    createFile
} = require('../controllers/fileanalyse')

const upload = multer({
    dest:'uploads/'
});

router.route('/fileanalyse').post(upload.single('upfile'), createFile)

module.exports = router