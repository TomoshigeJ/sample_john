function showMessage(value) {
  if (arguments.length !== 1) {
    throw new Error(`引数の数がまちがっています：${arguments.length}`);
  }
  console.log(value);
}

try {
  showMessage('山田', '鈴木');
} catch(e) {
  console.log(e.message);
}
