let data = ['Python', 'PHP', 'JavaScript'];
console.log(delete data[0]);
console.log(data);
console.log(data.length);

let langs = { primary: 'Japanese', secondary: 'English' };
console.log(delete langs.secondary);
console.log(langs);
console.log(delete langs.hoge);

let member = { name: '山田太郎', sex: 'male', language: langs };
console.log(delete member.language);
console.log(member);
console.log(langs);

let title = 'Vue.js本格入門';
console.log(delete title);

author = '鈴木次郎';
console.log(delete author);