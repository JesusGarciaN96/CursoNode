import fs from 'fs';

import { getTitle, getAuthor } from './functions.js';
import { course } from './objects.js';

const haikuContent = fs.readFileSync('haiku.txt', 'utf-8');
const haikuContentModified = haikuContent.replace(/guerra/ig, 'civil war');

fs.writeFileSync('haiku-copy.txt', haikuContentModified);

console.log(course);
console.log(getTitle());
console.log(getAuthor(course.author));
