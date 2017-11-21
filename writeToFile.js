const ToFileStream = require('./streamToFile.js');
const tfs = new ToFileStream();
tfs.write({path: "data.txt", content: "Hello"});
tfs.end(() => console.log("All files created"));
