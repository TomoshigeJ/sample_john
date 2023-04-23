let parent = document.querySelector('#parent');
parent.addEventListener('click', function(e) {
  if (e.target.dataset.add) {
  // if (e.currentTarget.dataset.add) {
    let btn = document.createElement('input');
    btn.type = 'button';
    btn.value = 'Add';
    btn.dataset.add = 1;
    parent.append(btn);
  }
}, false);
