function getSelectValue(name) {
  let result = [];
  let opts = document.querySelector(name).options;

  for (let opt of opts) {
    if (opt.selected) { result.push(opt.value); }
  }
  return result;
}

document.querySelector('#btn').addEventListener('click', function() {
  console.log(getSelectValue('#food'));
}, false);
