'use strict';

const mixedArray = [true, 'hello', 5, 12, -200, false, false, 'word'];

const typeCounts = {
  number: 0,
  string: 0,
  boolean: 0
};

for (const item of mixedArray) {
  const type = typeof item;
  typeCounts[type] += 1;
}

console.dir(typeCounts);
