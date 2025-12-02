
export function processPassphrase(data: string): number {
  let value: number = 50;
  let result: number = 0;

  data.split('\n').forEach(line => {
    const prefix = line.slice(0, 1);
    const suffix: number = Number(line.slice(1).trim());

    if (prefix === 'R') {
    value = (value + suffix) % 100;
    }
    else {
      value = ((value - suffix) % 100 + 100) % 100;
    }
    if (value == 0) {
      result += 1;
    }
  });

  return result;
}
