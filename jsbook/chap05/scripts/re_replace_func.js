let re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
let str = 'サポートサイトはhttp://www.example.com/です。';

console.log(str.replace(re, function(match, p1, p2, p3, offset, string) {
  return match.toUpperCase();
}));