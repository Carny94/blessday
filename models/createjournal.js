const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Fisrt create your model Schema if you have a form
//The moedl Schema will then be passed to your controllers

const scriptureSchema = new Schema ({
    scripture: {
        type: String
    },
});



const journalEntrySchema = new Schema({
    mood: {
        type: String,
        required: true
    },
    textField: {
        type: String,
        required: true
    },
    saveJournal: {
        type: Boolean
        
    },

    scriptures: [scriptureSchema]
}, {
    timestamps: true // Place the timestamps option here
});


module.exports = mongoose.model('Journal', journalEntrySchema);






