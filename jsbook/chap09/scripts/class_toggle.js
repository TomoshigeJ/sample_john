let elem = document.querySelector('#elem');
let highlight = function() {
  this.classList.toggle('highlight');
};

elem.addEventListener('mouseenter', highlight, false);
elem.addEventListener('mouseleave', highlight, false);
