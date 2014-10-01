/* jshint node:true */
'use strict';

var TermModel = require('../model/termModel');

module.exports = function (app) {
    app.get('/terms', function*() {
        this.body = yield TermModel.findAll();
    });
};
