import { writeFile } from 'node:fs';
import { input } from '@inquirer/prompts';
import { createRequire } from 'module';

// Create a require function to use CJS module in ESM project
const require = createRequire(import.meta.url);

// Import the CommonJS module
const qr = require('qr-image');

const userURL = await input({ message: 'Enter URL: ' });

var qr_svg = qr.image(userURL, { type: 'svg' });
qr_svg.pipe(require('fs').createWriteStream('myQR.svg'));
var svg_string = qr.imageSync(userURL, { type: 'svg' });

writeFile(svg_string, 'utf8', () => {
  console.log('Your QR-code has been created.');
}); 


