export default class {
  constructor(name = '名無権兵衛') {
    this.name = name;
  }

  greet() {
    return `こんにちは、${this.name}さん！`;
  }

  show() {
    return `名前は、${this.name}です。`;
  }
}
