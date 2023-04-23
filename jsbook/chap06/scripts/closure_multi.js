function closure(init) {
  let counter = init;

  return function() {
    return ++counter;
  }
}

let myClosure1 = closure(1);
let myClosure2 = closure(100);

console.log(myClosure1());
console.log(myClosure2());
console.log(myClosure1());
console.log(myClosure2());
