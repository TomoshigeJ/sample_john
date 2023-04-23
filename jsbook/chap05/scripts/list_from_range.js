const BEGIN = 10;
const END = 20;
const STEP = 3;

let list = Array.from(
  { length: (END - BEGIN) / STEP + 1 },
  function(v, i) {
    return BEGIN + (i * STEP);
  }
);

console.log(list);
