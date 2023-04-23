class Member {
  name = '名無権兵衛';
  age = 0;

  show() {
    console.log(`私の名前は${this.name}、${this.age}歳です。`);
  }
}

let m = new Member();
m.show();
