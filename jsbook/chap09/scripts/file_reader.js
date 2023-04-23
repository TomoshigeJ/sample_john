let file = document.querySelector('#file');
let reader = new FileReader();
reader.addEventListener('load', function() {
  document.querySelector('#result').textContent = reader.result;
}, false);

reader.addEventListener('error', function() {
  console.log(reader.error.message);
}, false);

document.querySelector('#btn').addEventListener('click', function() {
  reader.readAsText(file.files[0], 'UTF-8');
}, true);
