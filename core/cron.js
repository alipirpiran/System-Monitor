const config = require('../config/config');
const cron = require('node-cron');
const core = require('./index');

let task;

exports.getTask = () => task;
exports.startTask = () => {
    let sec = config.server.refreshRate;
    if (sec < 1 || sec > 59) sec = 10;
    core()
    task = cron.schedule(`*/${sec} * * * * *`, () => {
        core();
    });
};

exports.distroyTask = () => {
    if (task) {
        task.destroy();
        task = null;
    }
};
