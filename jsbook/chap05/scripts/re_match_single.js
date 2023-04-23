// let re = /^.+/g;
let re = /^.+/gs;
let str = 'こんにちは。\n私の名前は鈴木三郎です。';

let results = str.match(re);
for (let result of results) {
  console.log(result);
}