// fetch('book.json')
//   .then(res => res.json())
//   .then(data => console.log(data.title));

fetch('book.json')
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    throw new Error('指定のリソースが無効です。');
  })
  .then(data => console.log(data.title))
  .catch(e => window.alert(`問題発生：${e.message}`));
