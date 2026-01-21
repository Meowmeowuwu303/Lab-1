'use strict';

// Перша реалізація: inc з сигнатурою inc(n: number): number
function inc(n) {
  return ++n;
}

const a = 5;
const b = inc(a);
console.dir({ a, b });

console.log('---');
