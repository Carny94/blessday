const Journal = require('../../models/createjournal')

module.exports = {
    index
};

async function index(req, res) {
    try {
        const scriptures = await Journal.find({});
        return res.json(scriptures);
    } catch (error) {
        console.error('Error fetching scriptures:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}