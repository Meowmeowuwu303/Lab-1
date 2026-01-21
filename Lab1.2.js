// Друга реалізація: inc з сигнатурою inc(num: Num)
// де Num є об'єктом з полем n, щоб функція змінила поле вихідного об'єкта
'use strict';

const obj = { n: 5 };
inc(obj);

function inc(obj) {
  obj.n = ++obj.n;
}

console.dir(obj);

module.exports = { inc };
