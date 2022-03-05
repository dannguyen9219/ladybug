const express = require('express');
const router = express.Router();
const Bug = require('../models/supportTicket.js');

// Listening Route //
router.get('/', (req, res) => {
    res.send(`These bugs aren't the problem, they're the features!`)
});

// Index Route //
router.get('/bugs', (req, res) => {
    Bug.find({})
        .then((bugs) => {
            res.render('bugs/Index', { bugs });
        })
        .catch((error) => {
            res.json({ error })
        })
});

module.exports = router;