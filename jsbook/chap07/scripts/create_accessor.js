let member = Object.create(Object.prototype, {
  name: {
     value: '佐藤理央',
     writable: true,
     configurable: true,
     enumerable: true
  },
  birth: {
     value: new Date(2010, 5, 25),
     writable: true,
     configurable: true,
     enumerable: true
  },
  memo: {
     value: '仮入部期間中です。',
     writable: true,
     configurable: true,
     enumerable: true
  },
  age: {
    get() {
      let birth = this.birth;
      let current = new Date();
      let c_birth = new Date(current.getFullYear(),
        birth.getMonth(), birth.getDate());
      return (current.getFullYear() - birth.getFullYear()) +
        (c_birth.getTime() > current.getTime() ? -1 : 0);
    },	
    configurable: true,
    enumerable: true
  },
  gender: {
    get() {
      if (!this._gender) { return 'unknown'; }
      return this._gender;
    },
    set(value) {
      if (!['male', 'female', 'unknown'].includes(value)) {
        throw new Error('gender is invalid value.');
      }
      this._gender = value;
    },
    configurable: true,
    enumerable: true
  },
}); 

member.gender = 'male';
console.log(member.gender);
console.log(member.age);
