let list = document.querySelector('#list');
let li = list.children;
// let li = document.querySelectorAll('#list li');

console.log(`変更前： ${li.length}`);

list.appendChild(document.createElement('li'));
console.log(`変更後： ${li.length}`)
