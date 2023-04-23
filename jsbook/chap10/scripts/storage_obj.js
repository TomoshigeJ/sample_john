let storage = localStorage;
let apple = { name: 'りんご', price: 150, made: '青森' };
storage.setItem('apple', JSON.stringify(apple));
let data = JSON.parse(storage.getItem('apple'));
console.log(data.name);
