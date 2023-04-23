let books = [
  { title: 'ゼロからわかる TypeScript入門', price: 2948 },
  { title: 'Bootstrap 5 の教科書', price: 3828 },
  { title: 'はじめてのAndroidアプリ開発', price: 3520 },
];

let frag = document.createDocumentFragment();
for (let book of books) {
  let li = document.createElement('li');
  li.textContent = `${book.title}： ${book.price}円`;
  frag.append(li);
}
document.querySelector('#list').append(frag);

// let list = document.querySelector('#list');
// list.lastChild.after(list.firstChild);
