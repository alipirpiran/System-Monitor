const config = require('./config/config');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cron = require('./core/cron');

const Client = require('./core/models/client');
const indexRoute = require('./core/routes/index');

const PORT = config.server.port || 3030;
const clients = [];
app.use(express.json());
app.use('/', indexRoute);
io.on('connection', (socket) => {
    const client = new Client(socket);
    clients.push(client);

    if (!cron.getTask()) cron.startTask();
});

http.listen(PORT, () => {
    console.log('System Monitor is running on http://localhost:' + PORT);
});

module.exports.clients = clients;
