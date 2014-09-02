## Winston Transport for Orchestrate

Basic transport that works just like all other winston transports. Sends logged messages to an Orchestrate collection.

## options:

apiToken: API token for Orchestrate
collection: name of the collection to put it in

<code>
    var winston = require('winston');
    var orchestrate = require('../lib/winston-orchestrate.js');

    winston.add(winston.transports.Orchestrate, { apiKey: 'xxx', collection: 'test' });
</code>
