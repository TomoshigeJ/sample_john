class Member {
  constructor(name = '名無権兵衛') {
    this.name = name;
  }

  greet() {
    return `こんにちは、${this.name}さん！`;
  }
}

class BusinessMember extends Member {  
  greet() {
    return `■${super.greet()}■`;
  }
}

let bm = new BusinessMember('佐藤理央');
console.log(bm.greet());
