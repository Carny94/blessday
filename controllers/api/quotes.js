const Journal = require('../../models/createjournal')

module.exports = {
    index
};

async function index(req, res) {
    try {
      const response = await fetch('https://zenquotes.io/api/quotes/');
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error fetching Zen quotes:', error);
      res.status(500).json({ error: 'An error occurred while fetching Zen quotes' });
    }
  };