class Member {
  #name = '';
  #birth = new Date();

  constructor(name, birth) {
    this.#name = name;
    this.#birth = new Date(birth.getTime());
    Object.freeze(this);
  }

  get name() {
    return this.#name;
  }
  
  get birth() {
    return new Date(this.#birth.getTime());
  }
  
  show() {
    console.log(`私の名前は${this.#name}、誕生日は${this.#birth.toDateString()}です。`);
  }
  
  withName(name) {
    return new Member(name, this.birth);
  }
}
Object.freeze(Member.prototype);
