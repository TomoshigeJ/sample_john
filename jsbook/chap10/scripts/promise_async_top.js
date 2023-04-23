function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof value === 'number') {
        resolve(value ** 2);
      } else {
        reject('引数valueは数値でなければいけません。');
      }
    }, 500);
  });
}

let result1 = await asyncProcess(2);
let result2 = await asyncProcess(result1);
let result3 = await asyncProcess(result2);
console.log(result3);
