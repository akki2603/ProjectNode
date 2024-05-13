const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.Database_url)
const db = mongoose.connection;
db.on('error',(error) => {
    console.log(error);
})

db.once ('open', () => {
    console.log("db connected");
});
const expressLayOuts = require('express-ejs-layouts');
const routes = require('./routes/index');
// setting view engine 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.set('layout', 'layouts/layout');
app.use(expressLayOuts);
app.use(express.static('public'));

app.use('/' , routes);
app.listen(process.env.PORT || 3000 );