// --- Require Dependencies ----------------------------------------------------

var fs = require('fs');
var koa = require('koa');
var router = require('koa-router');
var serve = require('koa-static');
var body = require('koa-body');
var persistence = require('./persistance/persistance')

// --- Koa Setup ---------------------------------------------------------------

var app = koa();

app.use(serve('./client'));
app.use(body());
app.use(router(app));

// --- Create Servers ----------------------------------------------------------

var server = require('http').Server(app.callback()); 

app.get('/', function*() {
    this.body = {message: "Hello Worlds"}
})


// --- Load Routes -------------------------------------------------------------

fs.readdirSync(__dirname + '/routes').forEach(function (filename) {
  if (filename === '.DS_Store') return;
  require('./routes/' + filename)(app);
});

persistence.init()
.then(function() {
  // don't let it do anything until you get here

  server.listen(3000);
  console.log('server listening on port 3000');
})
