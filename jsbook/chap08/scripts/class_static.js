class Area {
  static pi = 3.14;
  
  static circle(radius) {
    return (radius ** 2) * this.pi;
  }
}

console.log(Area.pi);
console.log(Area.circle(10));
