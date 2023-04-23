window.addEventListener('storage', function (e) {
  console.log(`
  変更されたキー： ${e.key}
  変更前の値： ${e.oldValue}
  変更後の値： ${e.newValue}
  発生元ページ： ${e.url}`);
}, false);
