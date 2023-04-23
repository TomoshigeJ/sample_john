function setListValue(name, values) {
  let opts = document.querySelector(name).options;

  for (let opt of opts) {
    opt.selected = values.includes(opt.value);
  }
}

setListValue('#food', ['餃子', '焼き肉']);
