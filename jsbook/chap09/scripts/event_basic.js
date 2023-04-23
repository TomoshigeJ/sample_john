let pic = document.querySelector('#cover');
pic.addEventListener('mouseenter', function() {
  this.src = 'images/wings.jpg';
}, false);

// pic.addEventListener('mouseenter', function() {
//   this.src = 'images/wings.jpg';
// }, { once: true });

pic.addEventListener('mouseleave', function() {
  this.src = 'images/wings_mini.jpg';
}, false);
