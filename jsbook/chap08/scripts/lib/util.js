const AUTHOR = 'YAMADA, Yoshihiro';

export function getTriangleArea(base, height) {
  return base * height / 2;
}

export class Member {
  constructor(name = '名無権兵衛', age = 0) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(`私の名前は${this.name}、${this.age}歳です。`);
  }
}
