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
console.log(Object.getPrototypeOf(obj));

for (let prop in obj) {
  // if (!Object.hasOwn(prop, obj)) { continue; }
  // if (!obj.hasOwnProperty(prop)) { continue; }
  console.log(`${prop}: ${obj[prop]}`);
}

// console.log('z' in obj);
// console.log('x' in obj);
