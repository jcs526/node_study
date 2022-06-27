const zlib = require('zlib')
const fs = require('fs');

const readStream = fs.createReadStream('/readme2.txt')
const zlibStream = zlib.createGzip();
const WriteStream =fs.createWriteStream('./readme3.txt.gz');
readStream.pipe(zlibStream).pipe(WriteStream);
