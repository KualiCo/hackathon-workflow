var persistence = require('../persistance/persistance');
var r = require("rethinkdb");
var Promise = require('bluebird');

exports.findAll = function(){
  console.log("find all");

  return new Promise(function(resolve, reject) {
    r.table('terms').run(persistence.dbConn,
      function(err, cursor) {
        if (err){
          console.log(err);
          reject(err);
        } else {
          cursor.toArray(function(err, result) {
              if (err) reject(err);
              else{
                console.log(JSON.stringify(result, null, 2));
                resolve(result);
              }

          });
        }
      }
    );
  });
  }
