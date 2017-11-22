const tar = require('tar');
const fstream = require('fstream');
const path = require('path');
const destination = path.resolve(process.argv[2]);
const sourceA = path.resolve(process.argv[3]);
const sourceB = path.resolve(process.argv[4]);
