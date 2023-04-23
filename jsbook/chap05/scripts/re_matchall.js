let re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
let str = `サポートサイトはhttp://www.example.com/です。
           サンプル紹介サイトHTTPS://www.web-deli.com/もよろしく！`;

let results = str.matchAll(re);
for (let result of results) {
  console.log(result);
}