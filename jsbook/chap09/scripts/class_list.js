let elem = document.querySelector('#elem');

elem.addEventListener('mouseenter', function() {
  this.classList.add('highlight');
}, false);

elem.addEventListener('mouseleave', function() {
  this.classList.remove('highlight');
}, false);
