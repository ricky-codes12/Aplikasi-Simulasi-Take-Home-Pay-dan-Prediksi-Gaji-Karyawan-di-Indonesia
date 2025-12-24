"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCompressedSize = getCompressedSize;
const zlib = require('zlib');
function getCompressedSize(compressionAlgorithm, input) {
  if (compressionAlgorithm === 'gzip') return zlib.gzipSync(input, {
    level: 9
  }).length;
  if (compressionAlgorithm === 'brotli') return zlib.brotliCompressSync(input).length;
  throw new Error(`Unsupported compression algorithm: ${compressionAlgorithm}.`);
}