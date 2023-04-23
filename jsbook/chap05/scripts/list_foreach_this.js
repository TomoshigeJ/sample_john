let list = [ 10, 42, null, 73, 8 ];
let result = [];

list.forEach(function(value) {
  if (value !== null) {
    this.push(value);
  }
}, result);
console.log(result);