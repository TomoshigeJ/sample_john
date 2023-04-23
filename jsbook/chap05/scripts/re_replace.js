let re = /(0\d{1,3})-(\d{2,4})-(\d{3,4})/g;
// let re = /(0\d{1,3})-(\d{2,4})-(\d{3,4})/;

let str = `お問い合わせは088-888-8888まで。
夜間は088-999-9999で受け付けております。`;

console.log(str.replace(re, '$1($2)$3'));
// console.log(str.replaceAll(re, '$1($2)$3'));
