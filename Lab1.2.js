// Друга реалізація: inc з сигнатурою inc(num: Num)
// де Num є об'єктом з полем n, щоб функція змінила поле вихідного об'єкта
function incObj(num) {
  return ++num.n;
}

const obj = { n: 5 };
incObj(obj);
console.dir(obj);

module.exports = { inc, incObj };
