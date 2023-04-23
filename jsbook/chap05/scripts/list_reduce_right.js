let list = [
  ['ソロ', 1], ['デュオ', 2], ['トリオ', 3]
]
console.log(list.reduce(function (result, value) {
  return result.concat(value);
}));  
console.log(list.reduceRight(function (result, value) {
  return result.concat(value);
}));