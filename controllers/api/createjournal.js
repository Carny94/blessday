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
    const journalId = req.body.id;
    const deletedJournal = await Journal.findByIdAndDelete(journalId)
    return res.json(deletedJournal);
}
// have to send id a nd new journal that im going to place
async function updateEntry (req,res) {
    const updateJournalId = req.params.id;
    const updatedData = req.body;
    const updatedJournal = await Journal.findByIdAndUpdate(
        updateJournalId,
        updatedData,
        { new: true }
        );
    return res.json(updatedJournal);
}

async function getAll (req,res) {
    // request ({journal})body from SavedJournalPage
    const journals = await Journal.find({});
    return res.json(journals)


}


//update function
