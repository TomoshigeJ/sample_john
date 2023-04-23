let input = document.querySelector('#file');
input.addEventListener('change', function() {
  let files = input.files;
  for (let file of files) {
    console.log(`
      ファイル名： ${file.name}
      種類：${file.type}
      サイズ： ${file.size / 1024}KB
      最終更新日： ${new Date(file.lastModified)}`);
  }
}, false);
