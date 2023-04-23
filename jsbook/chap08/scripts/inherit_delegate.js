class Queue {
  #list = [];

  constructor(...data) {
    this.#list = data;
  }

  enqueue(elem) {
    this.#list.push(elem);
  }
  
  dequeue() {
    return this.#list.shift();
  }
  
  peek() {
    return this.#list[0];
  }
}

let q = new Queue(10, 20, 30);
q.enqueue(40);
console.log(q.dequeue());
console.log(q.peek());
