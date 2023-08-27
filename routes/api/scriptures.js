const express = require('express');
const router = express.Router();

const scriptureCtrl = require('../../controllers/api/scriptures');


// GET /api/scriptures
router.get('/', scriptureCtrl.index);

module.exports = router;
