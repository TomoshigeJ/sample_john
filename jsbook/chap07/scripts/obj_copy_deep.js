let obj = { hoge: 1, foo: { bar: 100 }};
let copied = JSON.parse(JSON.stringify(obj));

obj.foo.bar = 99;
console.log(obj);
console.log(copied);
