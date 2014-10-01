r = require('rethinkdb');


var rethinkConn = function(){
  return r.connect({host:'localhost', port:28015, db:'rethink1'});
}

exports.init = function() {
  return rethinkConn().then(function(connection) {
    exports.dbConn = connection
    return connection
  })
}
