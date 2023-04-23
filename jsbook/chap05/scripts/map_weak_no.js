let obj = {};
let data = new Map();
data.set(obj, 'ほげ');
obj = null;
console.log(data.size);