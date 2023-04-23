let str = 'みかん\tりんご\tぶどう\t';
let str2 = '𠮟られて';

console.log(str.split('\t'));
console.log(str.split('\n'));
console.log(str.split());
console.log(str2.split(''));
console.log(str.split('\t', 2));
console.log(str.split('\t', 0));
console.log(str.split('\t', -1));