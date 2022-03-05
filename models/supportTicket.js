const mongoose = require('mongoose');

const bugsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ticketStatus: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
});

const Bug = mongoose.model('Bug', bugsSchema);

module.exports = Bug;