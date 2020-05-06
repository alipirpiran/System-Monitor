const si = require('systeminformation');

exports.cpu = async () => si.cpu();
exports.cpuCurrentspeed = async () => si.cpuCurrentspeed();
exports.mem = async () => si.mem();


