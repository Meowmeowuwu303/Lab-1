// Перша реалізація: inc з сигнатурою inc(n: number): number
'use strict';

function inc(n) {
  return n + 1;
}

const a = 5;
const b = inc(a);
console.dir({ a, b });
