var assert = require('assert');
var winston = require('winston');
var nock = require('nock');
var winston_orchestrate;

// HTTP mocking
nock('https://api.orchestrate.io')
.post('/v0/test')
.reply(201);

if (process.env.NODE_DEBUG === 'true') {
  winston_orchestrate = require('..');
} else {
  winston_orchestrate = require('../lib-cov');
}

describe('Log', function () {
  before(function () {
    winston.remove(winston.transports.Console);
    winston.add(winston.transports.Orchestrate, { apiKey: 'xxx', collection: 'test' });
  });

	describe('#log()', function () {
		it('should return a success', function (done) {
			winston.log('info', 'Hello distributed log files!', {a: 1, b: 2}, function (err) {
        if (err) throw new Error(err);
        done();
      });
		});

    it('should fail gracefully', function (done) {
      winston.log('info', 'Hello distributed log files!', {a: 1, b: 2}, function (err) {
        assert(err);
        done();
      });
    });
	});
});
