let parent = Object.create(Object.prototype, {
  x: {
   get() {
     return this._x ?? 10;
   },
   set(value) {
     console.log(`setter is called: ${value}`);
     this._x = value;
   },
   configurable: true,
   enumerable: true
  },
  y: {
   value: 20, 
   writable: true,
   configurable: true,
   enumerable: true
  }
});

let obj = Object.create(parent, {
  z: {
   value: 30, 
   writable: true,
   configurable: true,
   enumerable: true
  }
});

obj.x = 100;

console.log(obj);
console.log(parent);
