const SerialPort = require('serialport');

const port = new SerialPort('/dev/ttyACM1',{
    baudRate: 115000
});
port.on('data', data => {
    console.log(data);
});
port.on('error', error => {
    console.log(error.message);
});
port.on('close', () => {
    console.log('Disconnected.');
});
