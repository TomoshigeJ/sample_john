document.querySelector('#btn').addEventListener('click', function() {
  window.frames[0].location.href = 'https://example.com/';
  // window.frames[0].location.assign('https://example.com/');
}, false);
