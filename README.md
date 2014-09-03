## Winston Transport for Orchestrate

[![Build Status](https://travis-ci.org/asamiller/winston-orchestrate.svg)](https://travis-ci.org/garbados/winston-orchestrate)
[![Coverage Status](https://coveralls.io/repos/asamiller/winston-orchestrate/badge.png)](https://coveralls.io/r/garbados/winston-orchestrate)

*Still a work-in-progress*

Basic transport that works just like all other winston transports. Sends logged messages to an Orchestrate collection.

## Install

    npm install winston-orchestrate

## Usage

``` javascript
var winston = require('winston');
var orchestrate = require('winston-orchestrate');

winston.add(winston.transports.Orchestrate, { apiKey: 'xxx', collection: 'test' });
```

### Options

* `apiToken`: API token for Orchestrate
* `collection`: name of the collection to put it in

## Test

    npm test
