// Injects the server-rendered page into dist/index.html (run after the client and SSR builds).
import { readFile, writeFile, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const { render } = await import(pathToFileURL(path.join(root, 'dist-server/entry-server.js')).href);

const htmlPath = path.join(root, 'dist/index.html');
const template = await readFile(htmlPath, 'utf8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error('Could not find the root element in dist/index.html');

await writeFile(htmlPath, template.replace(marker, () => `<div id="root">${render()}</div>`));
await rm(path.join(root, 'dist-server'), { recursive: true, force: true });
console.log('Prerendered dist/index.html');
