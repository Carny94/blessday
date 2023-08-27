const Journal = require('../../models/createjournal')

module.exports = {
    index
};

async function index(req, res) {
    const scriptures = await Journal.find({});
    return res.json(scriptures)

}