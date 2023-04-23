let obj = { hoge: 1, foo: 2 };
let prop = 'hoge';
eval(`console.log(obj.${prop})`);

console.log(obj[prop]);