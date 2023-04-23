// let re = /^[0-9]{1,}/g;
let re = /^[0-9]{1,}/gm;
let str = '101匹ワンちゃん。\n7人の小人';

let results = str.match(re);
// let results = str.match(/^[0-9]{1,}/gm);
for (let result of results) {
  console.log(result);
}
