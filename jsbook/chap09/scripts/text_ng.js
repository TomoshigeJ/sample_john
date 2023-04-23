let name = document.querySelector('#name');
let result = document.querySelector('#result');

document.querySelector('#btn').addEventListener('click', function() {
  result.innerHTML = `こんにちは、${name.value}さん！`;
}, false);
