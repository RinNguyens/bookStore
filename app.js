const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const mongoose = require('mongoose');

const PORT =  process.env.PORT || 5000;

// Use EJS 
app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout');
app.use(expressLayout);
app.use(express.static('public'));

const indexRouter =  require('./routes/index');

app.use('/',indexRouter);


app.listen(PORT, ()=> {
    console.log('Server Started on Port :', PORT);
})