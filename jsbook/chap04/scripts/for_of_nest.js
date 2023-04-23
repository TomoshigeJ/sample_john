let books = [
  ['ゼロからわかる TypeScript入門', '技術評論社'],
  ['これからはじめるVue.js 3実践入門', 'SBクリエイティブ'],
  ['Bootstrap 5 フロントエンド開発の教科書', '技術評論社'],
];

for(let [title, publisher] of books) {
  console.log(`${title}（${publisher} 刊行）`);
}