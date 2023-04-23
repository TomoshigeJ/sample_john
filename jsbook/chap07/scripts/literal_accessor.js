let obj = {
  _name: '名無権兵衛',
  get name() { return this._name },    
  set name(value) { this._name = value; }
};

obj.name = '山田太郎';
console.log(obj.name);
