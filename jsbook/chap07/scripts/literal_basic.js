let member = {
  name: '佐藤リオ',
  age: 21,
  // show: function() {
  //   console.log(`私は${this.name}、${this.age}歳です。`);
  // }

  show() {
    console.log(`私は${this.name}、${this.age}歳です。`);
  }
};

member.show();
