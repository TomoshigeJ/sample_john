let data = new Map();
data.set('壱', '1')
    .set('弐', '2')
    .set('参', '3')
    .set('壱', '一');
  
console.log(data.get('参'));
console.log(data.get('壱'));
console.log(data.get('肆'));

console.log(data.has('肆') ? data.get('肆') : '4');
