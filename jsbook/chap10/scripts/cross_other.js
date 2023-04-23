let origin = 'http://localhost';
let result = document.querySelector('#result');
parent.postMessage(new Date(), origin);

window.addEventListener('message', function(e) {
  if (e.origin !== origin) { return; }
  result.textContent = e.data;
  e.source.postMessage(new Date(), origin);  
}, false);
