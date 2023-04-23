let list = [ 'い', 'ろ', 'は', 'に', 'ほ', 'へ', 'と' ];

console.log(list.sort(function() {
  return Math.random() - 0.5;
}));