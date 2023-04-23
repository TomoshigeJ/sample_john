let str = 'うりうりがうりうりにきてうりうりのこし';

console.log(str.includes('うり'));
console.log(str.startsWith('うり'));
console.log(str.endsWith('うり'));
console.log(str.includes('うり', 10));
console.log(str.startsWith('うり', 3));
console.log(str.endsWith('うり', 2));

console.log(str.indexOf('うり') > -1);
console.log(str.indexOf('うり') === 0);
