winston-orchestrate

Winston Transport for Orchestrate

$ npm install winston-orchestrate 

Also requires install of winston

$ npm install winston


Basic transport that works just like all other winston transports. Sends logged messages to an Orchestrate Collection

## options:

apiToken: API token for Orchestrate
collection: name of the collection to put it in

<code>
    var winston = require('winston');
    var something = require('winston-orchestrate').Orchestrate;

    winston.add(something, {
        apiToken: "XXX",
        collection: "testing",
        level: 'error',
        handleExceptions : true
    });
</code>
