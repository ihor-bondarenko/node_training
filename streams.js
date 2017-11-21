const fs = require('fs');
const zlib = require('zlib');
const http = require('http');
const path = require('path');
const file = 'cld';
const server = '127.0.0.1';
const options = {
  hostname: server,
  port: 3000,
  path: '/',
  method: 'PUT',
  headers: {
    filename: path.basename(file),
    'Content-Type': 'application/octet-stream',
    'Content-Encoding': 'gzip'
  }
};
const req = http.request(options, res => {
  console.log('Server response: ' + res.statusCode);
});
fs.createReadStream(file)
.pipe(zlib.createGzip())
.pipe(req)
.on('finish', () => {
console.log('File successfully sent');
});
