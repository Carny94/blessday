const Journal = require('../../models/createjournal')

module.exports = {
     newEntry,
     deleteEntry,
     updateEntry,
     getAll
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

async function updateEntry (req,res) {
    const updateFormId = req.params.id;
    const updateEntry = await Journal.findByIdAndUpdate(updateFormId);
    return res.json(updateEntry);
}

async function getAll (req,res) {
    // request ({journal})body from SavedJournalPage
    const journals = await Journal.find({});
    return res.json(journals)


}


//update function
