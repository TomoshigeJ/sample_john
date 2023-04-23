function sum(init, ...nums) {
  let result = init;
  if (init === undefined) { throw new Error('init is required.'); }
  for (let num of nums) {
    if (typeof num !== 'number') {
      throw new Error(`指定値が数値ではありません：${num}`);
    }
    result += num;
  }
  return result;
}

console.log(sum());
