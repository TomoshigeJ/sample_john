let list = [ 1, 2, 3, 4, 5 ];

console.log(
  list.flatMap(function(value) {
    return [ value * 2, value ** 2 ];
  })
);