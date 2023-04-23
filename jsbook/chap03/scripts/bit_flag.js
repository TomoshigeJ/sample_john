const AMERICA = 1 << 0;
const RUSSIA  = 1 << 1;
const CHINA   = 1 << 2;
const INDIA   = 1 << 3;

let flags = AMERICA | CHINA;
console.log(flags & INDIA);

// let flags = AMERICA | RUSSIA | CHINA;
// console.log((flags & (AMERICA | CHINA)) === (AMERICA | CHINA));
