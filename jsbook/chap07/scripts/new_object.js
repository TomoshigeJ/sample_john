let member = new Object();
member.name = '佐藤リオ';
member.age = 21;
member.show = function() {
  console.log(`私は${this.name}、${this.age}歳です。`);
};

member.show();
