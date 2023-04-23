let elem = document.querySelector('#elem');

elem.addEventListener('mouseenter', function() {
  this.style.backgroundColor = 'Yellow';
}, false);

elem.addEventListener('mouseleave', function() {
  this.style.backgroundColor = '';
}, false);
