'use strict';
const fs = require('fs');
const util = require('util');
const http = require('http');
/*const cache = {};
function inconsistentRead(filename, callback) {
  if(cache[filename]) {
  //invoked synchronously
    process.nextTick(() => {callback(cache[filename])});
  } else {
    //asynchronous function
    fs.readFile(filename, 'utf8', (err, data) => {
      cache[filename] = data;
      console.log(data);
      callback(data);
    });
  }
}

function createFileReader(filename) {
  const listeners = [];
  inconsistentRead(filename, value => {
    listeners.forEach(listener => listener(value));
  });
  return {
    onDataReady: listener => listeners.push(listener)
  };
}

const reader1 = createFileReader('data.txt');
console.log('run reader1');
reader1.onDataReady(data => {
    console.log('First call data: ' + data);
    //...sometime later we try to read again from
    //the same file
    const reader2 = createFileReader('data.txt');
    reader2.onDataReady( data => {
      console.log('Second call data: ' + data);
    });
});*/


function parentClass(){
    this.test = 'test parent';
//  console.log(this);
};
parentClass.prototype = {
  test: () => { console.log('test') }
};

function childClass(){
  parentClass.call(this);
  this.test = 'test child';
};
//const obj = new childClass();
//console.log(obj.test());
console.time("t1");
setTimeout(() => {
    //nexTickLoop();
    console.log('set timeout 1');
    console.timeEnd("t1");
}, 100);

const server = http.createServer((req, res) => {
  console.log('created');
  res.end();
});

setImmediate(()=> {
  console.log('immediate 1');
});

function nexTickLoop() {
  process.nextTick(()=> {
    console.log('after created next tick2');
  })
}
let i = 10
while(i > 0){
  i--;
}

server.on('listening', () => {
  console.log('listening');
});
process.nextTick(()=> {
  console.log('after created next tick1');
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8022);
//console.log(util.inspect(obj, { showHidden: true }));
//const interval = setTimeout(()=>{console.log('interval')}, 2000)
