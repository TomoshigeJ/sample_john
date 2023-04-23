let list = [ 2, 3, 4, 5 ];

let result = list.map(function(value, index, array) {
  return value * value;
});
console.log(result);