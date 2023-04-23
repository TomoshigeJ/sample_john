function arrayWalk(data, callback) {
  for (let [key, value] of data.entries()) {
    callback(value, key);
  }
}

let list = [1, 2, 4, 8, 16];
arrayWalk(
  list,
  function (value, key) {
    console.log(`${key}：${value}`);
  }
);

// arrayWalk(list, (value, key) => console.log(`${key}：${value}`));
