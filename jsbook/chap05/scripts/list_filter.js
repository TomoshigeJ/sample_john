let books = [
  { title: 'TypeScript入門', price: 2948 },
  { title: 'Bootstrapの教科書', price: 3828 },
  { title: 'はじめてのAndroidアプリ開発', price: 3520 },
  { title: '基礎から学ぶC#の教科書', price: 3190 },
  { title: 'これからはじめるVue.js実践入門', price: 3740 },
];

console.log(books.filter(function(value) {
  return value.price < 3500;
}));