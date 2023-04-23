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

obj.x = 108;
console.log(obj.x);
console.log(parent.x);

console.log(delete obj.x);
console.log(obj.x);
console.log(parent.x);

console.log(delete obj.x);
console.log(obj.x);
console.log(parent.x);

// delete Object.getPrototypeOf(obj).x;
// delete parent.x;
// obj.x = undefined;
// console.log(obj.x);
// console.log(parent.x);

