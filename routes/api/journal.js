// routes/api Handle the endpath for the api/journal
const express = require('express');
const router = express.Router();

const createCTRL = require('../../controllers/api/createjournal');

//GET API ITEMS

// GET / JOURNAL

router.post('/create', createCTRL.newEntry);

// DELETE / JOURNAL (delte is a reserved word in JS)
router.delete('/delete', createCTRL.deleteEntry);



module.exports = router;