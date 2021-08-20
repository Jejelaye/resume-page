const express = require('express');
const indexRouter = require('./routes/index');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname, 'public')));


// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use('/', indexRouter);

app.listen(port)
console.log(`listening on port ${port}`)