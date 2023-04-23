let s = document.querySelector('#food');
let opts = s.childNodes;
for (let opt of opts) {
  if (opt.nodeType === 1) { console.log(opt.value); }
}
