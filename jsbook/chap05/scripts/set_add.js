let data = new Set();
data.add('壱')
  .add('弐')
  .add('参')
  .add('壱');
  
console.log(data);
console.log(data.delete('弐'));
console.log(data.delete('肆'));
console.log(data);
data.clear();
console.log(data);
