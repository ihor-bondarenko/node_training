const fs = require('fs');
const cache = {};
function inconsistentRead(filename, callback) {
  if(cache[filename]) {
  //invoked synchronously
  console.log('t1 fixes');
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
});