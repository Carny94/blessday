const Journal = require('../../models/createjournal')

module.exports = {
     newEntry,
    // create
};

// create a async function for when  a user create a journal

async function newEntry (req,res) {
    // using req.body to retreive form from front end ?
    const newEntry = req.body.form;
    const created = await Journal.create(newEntry);
    console.log(created)
    return res.json(created)

    
}




//update function
