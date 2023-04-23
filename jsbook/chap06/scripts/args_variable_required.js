function sum(...nums) {
  if (nums.length === 0) {
    throw new Error('引数は1個以上指定してください。');
  }
  let result = 0;
  for (let num of nums) {
    if (typeof num !== 'number') {
      throw new Error(`指定値が数値ではありません：${num}`);
    }
    result += num;
  }
  return result;
}

console.log(sum());
