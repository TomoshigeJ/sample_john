let onoff = document.querySelector('#onoff');

document.querySelector('#btn').addEventListener('click', function() {
  if(onoff.checked) {
    console.log(onoff.value);
  } else {
    console.log('チェックされていません。');
  }
}, false);
