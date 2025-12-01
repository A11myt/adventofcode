"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
async function readFile() {
    const content = await fs_1.promises.readFile('./data/passphrase.txt', 'utf8');
    return content;
}
async function main() {
    const data = await readFile();
    const minValue = 0;
    const maxValue = 99;
    let value = 50;
    let result = 0;
    let index = 1;
    data.split('\n').forEach(line => {
        const prefix = line.slice(0, 1);
        const suffix = Number(line.slice(1).trim());
        // console.log(suffix);
        // let overflow: number = 0;
        if (prefix === 'R') {
            const newValue = value + suffix;
            result += Math.floor(newValue / 100);
            value = ((newValue % 100) + 100) % 100;
            // value = ((value + suffix) % 100 + 100) % 100;
            // value += suffix;
            // if (value > maxValue) {
            //   overflow = value % maxValue;
            //   value = overflow;
            // }
        }
        else {
            const newValue = value - suffix;
            result += Math.abs(Math.floor(newValue / 100));
            value = ((newValue % 100) + 100) % 100;
            // value = ((value + suffix) % 100 + 100) % 100;
            // value -= suffix;
            // if (value < minValue) {
            //   overflow += value;
            //   value = maxValue + overflow;
            // }
        }
        if (value == 0) {
            result += 1;
        }
        index++;
    });
    console.log(`Result: ${result}`);
}
main();
