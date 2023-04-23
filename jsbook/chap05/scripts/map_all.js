let data = new Map();
data.set('1st', 'ファースト');
data.set('2nd', 'セカンド');
data.set('3rd', 'サード');

for (let key of data.keys()) {
  console.log(key);
}

for (let value of data.values()) {
  console.log(value);
}

for (let [key, value] of data.entries()) {
  console.log(`${key}：${value}`);
}

// for (let [key, value] of data) {
//   console.log(`${key}：${value}`);
// }

console.log(data.keys());
console.log(Array.from(data.keys()));