function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`入力値： ${value}`);
      } else {
        reject('入力は空です');
      }
    }, 500);
  });
}

Promise.race([
  asyncProcess('トクジロウ'),
  asyncProcess('ニンザブロウ'),
  asyncProcess('リンリン')
])

// Promise.any([
//   asyncProcess(),
//   asyncProcess('ニンザブロウ'),
//   asyncProcess('リンリン')
// ])
  .then(response => console.log(response))
  .catch(error => console.log(`エラー： ${error}`));
