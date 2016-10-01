
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus();
var app = require('./app')

if (cluster.isMaster) {
   
    console.log('Master cluster setting up ' + numCPUs + ' workers...');

    for(var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
    });
     startServer();
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    startServer();
}

function startServer() {
    http.createServer(app).listen(5000, function () {
        console.log('HTTP server listening on port ' + 5000);
    });
}
