let value = [1, 2, 4, 8, 16];

function updateArray(value) {
  value.pop();
  // value = [10, 20, 30];
  return value;
}

console.log(updateArray(value));
console.log(value);
