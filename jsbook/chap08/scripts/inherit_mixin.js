let LogMixin = {
  showProperties() {
    for (let [key, value] of Object.entries(this)) {
      console.log(`${key}：${value}`);
    }
  }
};

class Hamster {
  name = 'まめ';
  gender = 'male';
  age = 2;
}
Object.assign(Hamster.prototype, LogMixin);

let m = new Hamster();
m.showProperties();
