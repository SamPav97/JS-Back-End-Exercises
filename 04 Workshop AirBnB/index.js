const express = require('express');
const hbs = require('express-handlebars').create({
    extname: '.hbs'
});

const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');
const defaultController = require('./controllers/defaultController');
const defaultTitle = require('./middlewares/defaultTitle');

const app = express();

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

// This is Middleware that takes the request and adds more info to it. In this case it gives a page title in cases where there is none.
//Everything in the index happens one after the other.
app.use(defaultTitle('SoftUni Accomodation')); // This middleware is for all routers

app.use(homeController);
//Or we can attatch middleware to speciffic router if we put it between adress and router:
// app.use('/catalog', defaultTitle('SoftUni Accomodation'), catalogController);
app.use('/catalog', catalogController);
app.use('/create', createController);
//TODO attach other controllers.


app.all('*', defaultController);

app.listen(3000, console.log('Server listening on port 3000'));