let re = /(0\d{1,3})-(\d{2,4})-(\d{3,4})/;
let str = 'オフィスの電話番号は000-111-3333です。';

let result = str.match(re);
console.log(`
市外局番：${result[1]}
市内局番：${result[2]}
加入者番号：${result[3]}
`);