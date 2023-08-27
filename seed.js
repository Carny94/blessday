require('dotenv').config();
require('./config/database');

// in my seeded folder I will store my data of scriptures and emojis

const Journal = require('./models/createjournal')

(async function () {
    await Journal.create([
        {Book: 'Isaiah', verse: '45:10', read: '"In the world you will have tribulation. But take heart; I have overcome the world."'}
    ])
}
    )
