function getRadioValue(name) {
  let result = '';
  let elems = document.querySelectorAll(`input[name="${name}"]`);

  for(let elem of elems) {
    if (elem.checked) {
      result = elem.value;
      break;
    }
  }
  return result;
}

document.querySelector('#btn').addEventListener('click', function() {
  console.log(getRadioValue('food'));
}, false);
