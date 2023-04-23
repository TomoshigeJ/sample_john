class Member {
  constructor(name = '名無権兵衛') {
    this.name = name;
  }
}

class BusinessMember extends Member {
  constructor(name = '名無権兵衛', title = '社員') {
    super(name);
    this.title = title;
  }
}

let bm = new BusinessMember('佐藤理央', '主任');
console.log(bm);
