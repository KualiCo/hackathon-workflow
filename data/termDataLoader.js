// this file takes the terms data and loads it into a rethinkDb


//var persistence = require("../server/persistance/persistance");

var r = require("rethinkdb");

var termData = require("./termsData.json");

var rethinkConn = r.connect({host:'localhost', port:28015, db:'rethink1'});

rethinkConn.then(
  function(conn) {
    return r.table('terms').insert(termData).run(conn);
  }
)
