const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//Database
const db = require('./config/database');

db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

const app = express();

// ------MIDDLEWARE - START------ //
// Handlebars
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));

// ------MIDDLEWARE - END------ //

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Index route
app.get('/', (req, res) => res.render('index', { layout: 'landing'}));

// Gig routes
app.use('/gigs', require('./routes/gigs'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));