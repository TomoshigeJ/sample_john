let result = document.querySelector('#result');
document.querySelector('#btn').addEventListener('click', function() {
  let data = new FormData(document.querySelector('#myform'));
  fetch('fetch_post.php', { 
    method: 'POST',
    body: data,
  })
    .then(res => res.text())
    .then(text => result.textContent = text);
}, false);
