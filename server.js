//variables
const express = require('express');
 const path = require('path');
 const favicon = require('serve-favicon');
 const logger = require('morgan');
	
 require('dotenv').config();
 require('./config/database');


 const app = express();
	

 
 app.use(logger('dev'));
 app.use(express.json());

 // Configure both serve-favicon & static middleware
 // to serve from the production 'build' folder
 app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
 app.use(express.static(path.join(__dirname, 'build')));
 app.use(require('./config/checkToken'));



 //middleware to verify token and assign usern objects
 //be sure to mount routes


 const port = process.env.PORT || 3001;
 
// put API routes here, before the "catch all" routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/journal', require('./routes/api/journal'));
app.use('/api/scriptures', require('./routes/api/scriptures'));
app.use('/api/quotes', require('./routes/api/quotes'));


//protect all routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

 app.listen(port, function() {
    console.log(`Express app runnin on port ${port}`)
 });