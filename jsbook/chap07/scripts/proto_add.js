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

parent.v = 0;

for (let prop in obj) {
  console.log(`${prop}: ${obj[prop]}`);
}
