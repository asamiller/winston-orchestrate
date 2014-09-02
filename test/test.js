var assert = require('assert');
var winston = require('winston');
var orchestrate = require('../lib/winston-orchestrate.js');

winston.add(winston.transports.Orchestrate, { apiKey: 'xxx', collection: 'test' });


winston.log('info', 'Hello distributed log files!', {a: 1, b: 2});


// describe('Log', function(){
// 	describe('#log()', function(){
// 		it('should return a success', function(){
// 			winston.log('info', 'Hello distributed log files!');
// 		})
// 	})
// })
