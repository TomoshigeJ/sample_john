let list = [ 1, 2, null, 4, 5 ];

try {
  list.forEach(function(value) {
    if (value === null) {
      throw new Error('null値を検出しました。');
    }
    console.log(value);
  });
} catch(e) {
  console.log(e.message);
}