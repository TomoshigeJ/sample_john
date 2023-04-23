class Member {
  constructor(name = '名無権兵衛', age = 0) {
    this.name = name;
    this.age = age;
  }
}

let m = new Member('佐藤理央', 25);
Member.prototype.greet = function() {
  console.log(`こんにちは、${this.name}さん！`);
};
m.greet();
