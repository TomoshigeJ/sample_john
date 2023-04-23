// document.querySelector('#main').addEventListener('click', function() {
//   window.scrollBy(0, window.innerHeight);
// }, false);

document.querySelector('#main').addEventListener('click', function(e) {
  let p = e.target.closest('[id^="chap_"]');
  if (p) {
    let next = `#chap_${Number(p.id.split('_')[1]) + 1}`;
    document.querySelector(next)?.scrollIntoView(true);
  }
}, false);
