let target = 'https://wings.msn.to';
let frame = document.querySelector('#frame');
let message = document.querySelector('#message');

document.querySelector('#btn').addEventListener('click', function() {
  frame.contentWindow.postMessage(message.value, target);
}, false);
window.addEventListener('message', function(e) {
  if (e.origin !== target) { return; }
  console.log(e.data);
}, false);
