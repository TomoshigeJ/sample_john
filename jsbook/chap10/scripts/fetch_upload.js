let result = document.querySelector('#result');
let upfile = document.querySelector('#upfile');
upfile.addEventListener('change', function() {
  let f = upfile.files[0];
  let data = new FormData();
  data.append('upfile', f, f.name);
  fetch('fetch_upload.php', { 
    method: 'POST',
    body: data,
  })
    .then(res => res.text())
    .then(text => result.textContent = text);
}, false);
