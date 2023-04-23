class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  toString() {
    return `(${this.x}, ${this.y})`;
  }

  valueOf() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  // [Symbol.toPrimitive](hint) {
  //   if (hint === 'number') {
  //     return this.valueOf();
  //   }
  //   return this.toString();
  // }
}

let c = new Coordinate(5, 2);

console.log(`${c}`);
console.log(+c);
console.log(c + '');
