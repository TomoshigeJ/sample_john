let re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
// let re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/i;
// let re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/g;
let str = `サポートサイトはhttp://www.example.com/です。
           サンプル紹介サイトHTTPS://www.web-deli.com/もよろしく！`;

let results = str.match(re);
for (let result of results) {
  console.log(result);
}
// console.log(results.index);
