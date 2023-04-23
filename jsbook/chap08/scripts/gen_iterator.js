class MyIterator {
  constructor(data) {
    this.data = data;
  }

  *[Symbol.iterator]() {
    let current = 0;
    while(current < this.data.length) {
      yield this.data[current++];
    }
  }
}

let itr = new MyIterator(['one', 'two', 'three']);
for(let value of itr) {
  console.log(value);
}
