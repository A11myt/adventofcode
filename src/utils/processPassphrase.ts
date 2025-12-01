
export function processPassphrase(data: string): number {
  let value: number = 50;
  let result: number = 0;
  let index: number = 1;

  data.split('\n').forEach(line => {
    const prefix = line.slice(0, 1);
    const suffix: number = Number(line.slice(1).trim());

    if (prefix === 'R') {
      const newValue = value + suffix;
      result += Math.floor(newValue / 100);
      value = ((newValue % 100) + 100) % 100;
    }
    else {
      const newValue = value - suffix;
      result += Math.abs(Math.floor(newValue / 100));
      value = ((newValue % 100) + 100) % 100;
    }
    if (value == 0) {
      result += 1;
    }
    index++;
  });

  return result;
}
