const RandomStream = require('./streams');
const randomStream = new RandomStream();
randomStream.on('readable', () => {
  let chunk;
  while((chunk = randomStream.read()) !== null) {
    console.log(`Chunk received: ${chunk.toString()}`);
  }
}).on('error', () => {
  console.log('finish')
});
