const main = require('../../index');
const cron = require('../cron');
class Client {
    /**
     * @param  {SocketIO.Socket} client
     */
    constructor(client) {
        this.socket = client;
        console.log('client connected!');
        this.client = this;

        client.on('disconnect', this.remove.bind(this));
    }

    sendServerData(data) {
        this.socket.emit('info', data);
    }

    remove() {
        const index = main.clients.findIndex(
            (val) => val.socket.id == this.socket.id
        );
        if (index != -1) main.clients.splice(index, 1);
        if (main.clients.length == 0) cron.distroyTask();
    }
}

module.exports = Client;
