let data = new Map();
data.set('1st', 'ファースト');
data.set('2nd', 'セカンド');
data.set('3rd', 'サード');

data.forEach(function (value, key) {
  console.log(`${key}：${value}`);
});