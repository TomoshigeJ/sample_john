function setCheckValue(name, values) {
  let elems = document.querySelectorAll(`input[name="${name}"]`);

  for(let elem of elems) {
    elem.checked = values.includes(elem.value);
  }
}

setCheckValue('food', ['餃子', '焼き肉']);
