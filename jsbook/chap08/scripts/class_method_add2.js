class Member {
  constructor(name = '名無権兵衛', age = 0) {
    this.name = name;
    this.age = age;
  }
}

let m1 = new Member('佐藤理央', 25);
let m2 = new Member('田中譲二', 13);

m1.greet = function() {
  console.log(`こんにちは、${this.name}さん！`);
};

m1.greet();
m2.greet();
