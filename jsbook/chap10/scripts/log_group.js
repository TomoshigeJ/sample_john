console.group('上位グループ');
// console.groupCollapsed('上位グループ');
for (let i = 0; i < 3; i++) {
  console.group(`下位グループ ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
  console.groupEnd();
}

console.groupEnd();
