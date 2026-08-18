import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.static(__dirname + '/src'));
const port = 1342;
app.listen(port);
console.log('server on http://localhost:' + port);
