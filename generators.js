const fs = require('fs');
const path = require('path');

/*function* iteratorGenerator(arr) {
  for(let i = 0; i <arr.length; i++) {
    yield arr[i];
  }
}
const iterator = iteratorGenerator(['apple', 'orange', 'watermelon']);
let currentItem = iterator.next();
while(!currentItem.done) {
  console.log(currentItem.value);
  currentItem = iterator.next();
}*/
function asyncFlow(generatorFunction) {
  function callback(err) {
    if(err) {
      return generator.throw(err);
    }
    const results = [].slice.call(arguments, 1);
    generator.next(results.length> 1 ? results : results[0]);
  }
  const generator = generatorFunction(callback);
  generator.next();
}


asyncFlow(function* (callback) {
  const filename = path.basename(__filename);
  const myself = yield fs.readFile('data.txt', 'utf8', callback);
  yield fs.writeFile(`clone_of_${filename}`, myself, callback);
});
