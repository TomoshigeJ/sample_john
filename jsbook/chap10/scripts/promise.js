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

asyncProcess('トクジロウ')
  .then(response => console.log(response))
  .catch(error => console.log(`エラー： ${error}`))
  // .then(
  //   response => console.log(response),
  //   error => console.log(`エラー： ${error}`)
  // )
  .finally(() => console.log('処理終了'));
