function closure(init) {
  let counter = init;

  return function() {
    return ++counter;
  }
}

let myClosure = closure(1); 
console.log(myClosure());
console.log(myClosure());
console.log(myClosure());
