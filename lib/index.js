var util = require('util');
var winston = require('winston');
var orchestrate = require('orchestrate');

var Orchestrate = exports.Orchestrate = function (options) {
    options = options || {};
    if(!options.apiKey || !options.collection){
        throw new Error('options cannot be null');
    }
    else {
        this.apiKey     = options.apiKey;
        this.collection = options.collection;
        this.level      = options.level    || 'info';
        this.silent     = options.silent   || false;
        this.raw        = options.raw      || false;
        this.customFormatter = options.customFormatter;

        //- Enabled loging of uncaught exceptions
        this.handleExceptions = options.handleExceptions || false;

        //- Configure Orchestrate db
        this.db = orchestrate(this.apiKey);
    }
};

// Inherit from `winston.Transport` so you can take advantage
// of the base functionality and `.handleExceptions()`.
util.inherits(Orchestrate, winston.Transport);

//- Attaches this Transport to the list of available transports
winston.transports.Orchestrate = Orchestrate;

Orchestrate.prototype.log = function (level, message, meta, callback) {
    //- Use custom formatter for message if set
    var log_message = this.customFormatter ? 
                      this.customFormatter(level, message, meta) : 
                      { level: level, message: message, meta: meta };

    var key = new Date().toISOString();

    this.db.put(this.collection, key, log_message)
    .then(function (result) {
        callback(null, true);
    })
    .fail(function (err) {
        callback(err.body);
    });
};