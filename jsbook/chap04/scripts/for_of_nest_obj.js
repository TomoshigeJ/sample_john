let books = [
  {
    isbn: '978-4-297-12635-3',
    title: 'ゼロからわかる TypeScript入門',
    publisher: '技術評論社'
  },
  {
    isbn: '978-4-8156-1336-5',
    title: 'これからはじめるVue.js 3実践入門',
    publisher: 'SBクリエイティブ'
  },
  {
    isbn: '978-4-297-12490-8',
    title: 'Bootstrap 5 フロントエンド開発の教科書',
    publisher: '技術評論社'
  },
];

for({ title, publisher} of books) {
  console.log(`${title}（${publisher} 刊行）`);
}