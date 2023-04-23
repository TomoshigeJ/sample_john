let list = document.querySelectorAll('#list a');
let pic = document.querySelector('#pic');
let del = document.querySelector('#del');

for (let li of list) {
  li.addEventListener('click', function(e) {
    let isbn = this.getAttribute('data-isbn');

    if (isbn) {
      let img = document.createElement('img');
      img.src = `https://wings.msn.to/books/${isbn}/${isbn}.jpg`;
      img.alt = e.textContent;
      img.height = 150;
      img.width = 108;
      if (pic.querySelector('img')) {
        pic.replaceChild(img, pic.lastChild);
        // pic.replaceChild(img, pic.firstChild);
      } else {
        del.disabled = false;
        pic.append(img);
      }
    }
  }, false);
}

del.addEventListener('click', function() {
  pic.removeChild(pic.lastChild);
  del.disabled = true;
}, false);
