function arrayWalk(data, callback) {
  for (let [key, value] of data.entries()) {
    callback(value, key);
  }
}

let result= 0;
function sumElement(value, key) {
  result += value;
}

let list = [1, 2, 4, 8, 16];
arrayWalk(list, sumElement);
console.log(`合計値：${result}`);
