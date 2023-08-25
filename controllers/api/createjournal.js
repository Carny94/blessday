const Journal = require('../../models/createjournal')

module.exports = {
     newEntry,
     deleteEntry
};

// create a async function for when  a user create a journal

async function newEntry (req,res) {
    // using req.body to retreive form from front end ?
    const newEntry = req.body.form;
    const created = await Journal.create(newEntry);
    console.log(created)
    return res.json(created)
}

async function deleteEntry (req,res) {
    const formId = req.params.id;
    const deleteForm = await Journal.findByIdAndDelete(formId)
    return res.json(deleteForm);

}




//update function
