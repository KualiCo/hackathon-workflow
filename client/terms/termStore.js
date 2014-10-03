var Promise = require('bluebird');
var $ = require('jquery');

module.exports.getTerms = function(){
  return $.get("/termsService")
  .then(function(data){
    console.log(data);
    return data;
  })
}
