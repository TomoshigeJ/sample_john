let target = document.querySelector('#target');
let x = document.querySelector('#x');
let result = document.querySelector('#result');

document.querySelector('#btn').addEventListener('click', function() {
  let worker = new Worker('scripts/worker.js');

  worker.postMessage({
    target: target.value,
    x: x.value
  });
  result.textContent ='計算中...';

  worker.addEventListener('message', function(e) {
    result.textContent = e.data;
  }, false);
  worker.addEventListener('error', function(e) {
    result.textContent = e.message;
  }, false);
}, false);
