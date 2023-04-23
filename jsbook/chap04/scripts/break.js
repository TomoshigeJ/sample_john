let i = 1;
let result = 0;

for (i = 1; i <= 100; i++) {
  result += i;
  if (result > 1000) { break; }
}

console.log(`合計値が1000を超えるのは${i}`);
