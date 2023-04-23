let re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
let str = 'サポートサイトはhttp://www.example.com/です。';

console.log(str.replace(re, '<a href="$&">$&</a>'));