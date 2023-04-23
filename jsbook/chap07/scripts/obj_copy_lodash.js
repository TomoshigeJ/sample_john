let obj = { hoge: 1, foo: { bar: 100 }};
let copied = _.cloneDeep(obj);

obj.foo.bar = 99;
console.log(obj);
console.log(copied);
