class Member {
  #name = '';
  #age = 0;

  constructor(name, age) { 
    this.#name = name;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }
  
  get age() {
    return this.#age;
  }
  
  set age(value) {
    if (typeof(value) !== 'number' || value < 0) {
      throw new TypeError('ageは0以上の数値で指定してください。');
    }
    this.#age = value;
  }

  show() {
    console.log(`私の名前は${this.#name}、${this.#age}歳です。`);
  }
}

let m = new Member('佐藤理央', 25);
m.show();
m.age = -18;
