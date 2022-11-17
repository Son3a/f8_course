const express = require('express')
const app = express()
const port = 3000
const path = require("path")
const handlebars = require('express-handlebars');
const { request } = require('http');

app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());
app.use(express.urlencoded());

// view engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers: require('./helpers/handlebars'),
}));
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

// Router
require('./routes')(app)

//config mongodb
require('./config/db').connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})