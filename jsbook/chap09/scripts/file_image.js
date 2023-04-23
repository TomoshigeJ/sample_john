let file = document.querySelector('#file');
let reader = new FileReader();
reader.addEventListener('load', function() {
  document.querySelector('#result').src = reader.result;
}, false);

file.addEventListener('change', function() {
  reader.readAsDataURL(file.files[0]);
}, false);
