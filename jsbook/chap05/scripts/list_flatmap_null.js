let list = [ 10, 42, null, 73, 8 ];

console.log(
  list.flatMap(function(value) {
    if (value === null) { return []; }
    return value;
  })
);