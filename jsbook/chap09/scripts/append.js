let title = document.querySelector('#title');
let url = document.querySelector('#url');
let list = document.querySelector('#list');

document.querySelector('#btn').addEventListener('click', function() {
  let li = document.createElement('li');
  let anchor = document.createElement('a');

  anchor.href = url.value;
  anchor.textContent = title.value;
  // let href = document.createAttribute('href');
  // href.value = url.value;
  // anchor.setAttributeNode(href);
  // let text = document.createTextNode(title.value);
  // anchor.append(text);

  li.append(anchor);
  list.append(li);
  // li.prepend(anchor);
  // list.prepend(li);

}, false);
