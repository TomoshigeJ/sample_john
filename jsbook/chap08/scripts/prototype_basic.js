class Member {
  constructor(name = '名無権兵衛', age = 0) {
    this.name = name;
    this.age = age;
  }
  
  show() {
      console.log(`私の名前は${this.name}、${this.age}歳です。`);
  }
}

let m = new Member('佐藤理央', 25);
console.log(Object.getPrototypeOf(m));
console.log(Member.prototype === Object.getPrototypeOf(m));
