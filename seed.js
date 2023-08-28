require('dotenv').config();
require('./config/database');

const Journal = require('./models/createjournal');

(async function () {
    const journal = await scripture.create([
        
        { book: 'John', verse: '16:33', read: 'In the world you will have tribulation. But take heart; I have overcome the world.' },
        { book: 'Isaiah', verse: '41:10', read:  ' "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."'},
        { book: 'Philippians', verse: '4:6-7', read: '"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus"'},
        { book: 'John', verse: '16:33', read: 'In the world you will have tribulation. But take heart; I have overcome the world.' },
        { book: 'John', verse: '16:33', read: 'In the world you will have tribulation. But take heart; I have overcome the world.' }
    ]);

    process.exit();
})();