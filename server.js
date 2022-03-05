// Dependencies Boilerplate //
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require('path');
const supportTicketController = require('./controllers/supportTickets.js');

// Database Connection //
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Establish Connection //
mongoose.connect(DATABASE_URL, CONFIG);

// Connection opens/disconnects/error //
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));
;

// // Models //
// const { Schema, model } = mongoose;

// // Bugs Schema //
// const bugsSchema = new Schema({
//     supportTicketTitle: String,
//     ticketStatus: String,
//     ticketDescription: String,
//     priority: String,
// });

// // Bug Model //
// const Bug = model('Bug', bugsSchema);

// Views Application Object Engine //
const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

// Middleware //
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(req.body)
    next()
});

/////////////////////////////
/////// CRUD Routes ////////
///////////////////////////

// Seed Route //
// app.get('/bugs/seed', (req, res) => {
//     const startBugs = [
//         { title: `Page Load`, ticketStatus: `open`, description: `page 2 does not load`, priority: `medium`}
//     ]
//     Bug.deleteMany({}).then((data) => {
//         Bug.create(startBugs).then((data) => {
//             res.json(data);
//         })
//     }).catch((err) => {
//         res.status(400).send(err)
//     })
// });


// Controller Routes //
app.use('/', supportTicketController);

// Listening to PORT 8000 //
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));