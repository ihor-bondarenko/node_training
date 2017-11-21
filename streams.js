const fs = require('fs');
const zlib = require('zlib');
const http = require('http');
const path = require('path');
const stream = require('stream');
const Chance = require('chance');

const chance = new Chance();
class RandomStream extends stream.Readable {
  constructor(options) {
    super(options);
  }
  _read(size) {
    const chunk = chance.string();
     //[1]
    console.log(`Pushing chunk of size: ${chunk.length}`);
    this.push(chunk, 'utf8');
     //[2]
    if(chance.bool({likelihood: 5})) {
       //[3]
      this.push(null);
    }
  }
}
module.exports = RandomStream;


/*const file = 'cld';
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
*/
