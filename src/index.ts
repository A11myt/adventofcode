import { promises as fs } from 'fs';
import { processPassphrase } from './utils/processPassphrase';

async function readFile(): Promise<string> {
  const content: string = await fs.readFile('./data/passphrase.txt', 'utf8');
  return content;
}

async function main(): Promise<void> {
  const data :string = await readFile();
  let output :number = processPassphrase(data);
  console.log(`Result: ${output}`);
}

main();

