let data = [ 'apple', 'orange', 'banana' ];
Array.prototype.hoge = function() {};

for (let value of data) {
  console.log(value);
}