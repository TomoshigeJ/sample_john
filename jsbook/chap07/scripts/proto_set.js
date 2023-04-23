let parent = {
  x: 10,
  y: 20,
};

let obj = Object.create(parent, {
  z: {
   value: 30, 
   writable: true,
   configurable: true,
   enumerable: true
  }
});

console.log(obj);
console.log(parent);
console.log('---------------------------');

obj.x = 100;

console.log(obj);
console.log(parent);
