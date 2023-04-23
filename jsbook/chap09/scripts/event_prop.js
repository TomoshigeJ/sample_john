let pic = document.querySelector('#cover');
pic.onmouseenter = function() {
  this.src = 'images/wings.jpg';
}

pic.onmouseleave = function() {
  this.src = 'images/wings_mini.jpg';
}
