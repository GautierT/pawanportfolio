/**
 * Module dependencies.
 */

var path = require('path');
var extend = require('util')._extend;


var defaults = {
    root: path.normalize(__dirname + '/..'),
    app : {
        name : 'hellpppe'
    }
};

/**
 * Expose
 */

module.exports = {
    development: extend(defaults),
    test: extend(defaults),
    production: extend(defaults)
}[process.env.NODE_ENV || 'development'];
