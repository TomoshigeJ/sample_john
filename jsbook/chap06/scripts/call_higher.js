function arrayWalk(data, callback) {
  for (let [key, value] of data.entries()) {
    callback(value, key);
  }
}

function showElement(value, key) {
  console.log(`${key}：${value}`);
}

let list = [1, 2, 4, 8, 16];
arrayWalk(list, showElement);
