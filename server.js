// Dependencies Boilerplate //
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require('path');

// Database Connection //
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Establish Connection //
mongoose.connect(DATABASE_URL, CONFIG);

// Connection opens/disconnects/error //
const db = mongoose.connect;
db.on('open', () => console.log('Connected to Mongoose'));
db.on('close', () => console.log('Disconnected to Mongoose'));
db.on('error', (error) => console.log(error));

// Models //


// Bugs Schema //


// Bug Model //


// Views Application Object Engine //
const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

// Middleware //
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));



// Listening to PORT 8000 //