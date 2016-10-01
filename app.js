
var express = require('express'),
    config = require('./config'),
    cors = require('cors');


var app = express();

//environment settings
var envs = ['development', 'staging', 'production'];
if (envs.indexOf(process.env.NODE_ENV) < 0) {
    throw new Error('Node should be started with NODE_ENV set to one of:' + envs.join(','));
}

app.use(express.static(__dirname + '/bower_components/'));
app.use(express.static(__dirname + '/app'));

// Use Cross origin resource sharing
app.use(cors());

module.exports = app;