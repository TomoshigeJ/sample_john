let n = '123xxx';
console.log(Number(n));
console.log(Number.parseFloat(n));
console.log(Number.parseInt(n));

let d = new Date();
console.log(Number(d));
console.log(Number.parseFloat(d));
console.log(Number.parseInt(d));

let h = '0x10';
console.log(Number(h));
console.log(Number.parseFloat(h));
console.log(Number.parseInt(h));

let b = '0b11';
console.log(Number(b));
console.log(Number.parseFloat(b));
console.log(Number.parseInt(b));

let e = '1.01e+2';
console.log(Number(e));
console.log(Number.parseFloat(e));
console.log(Number.parseInt(e));

// console.log(Number.parseInt('0b11', 2));
// console.log(Number.parseInt('11', 2));