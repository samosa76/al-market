/**
 * 
 * Pastiin tutup dulu serial monitor yang ada di Arduino IDE karena nanti pasti error
 * Pastiin juga settingan path sama BaudRate bener
 * 
 */

const {SerialPort} = require('serialport');
const {ReadlineParser} = require('@serialport/parser-readline');


/**
 * 
 * Ini Buat setting serial port 
 * 
 * 1. Sesuaikan COM(X) sesuai dengan di Arduino
 * 2. Sesuaikan BaudRate dengan serial monitor yang di pake
 * 
 */
const serialPort = new SerialPort({
    path: 'COM3', // (1)
    baudRate: 115200 // (2)
}, (err) => {
    if (err) {
        return console.log('Error on Create: ', err.message);
    }
})

serialPort.on('error', function(err) {
  console.log('Error: ', err.message);
});

/**
 * 
 * Ini buat parse semua log yang ada di serial monitor
 * Kalo bisa pastiin hanya UID yang masuk
 * 
 */
const parser = serialPort.pipe(new ReadlineParser({delimiter: '\r\n'}));


/**
 * Emang di awal kosong
 */
let rfuid = '';


/**
 * 
 * Kalo udah cuman UID aja tinggal masukin data UID ke variable rfuid
 * Kalo belum trim dulu aja atau ubah di arduinonya
 * 
 */
parser.on('data', (data) => {
    console.log('Data received: ', data);
    rfuid = data;
});


/**
 * 
 * Disini di export terus nanti di import di routes.js
 * 
 */
module.exports = rfuid;
