function setRadioValue(name, value) {
  let elems = document.querySelectorAll(`input[name="${name}"]`);

  for(let elem of elems) {
    if (elem.value === value) {
      elem.checked = true;
      break;
    }
  }
}

setRadioValue('food', '餃子');
