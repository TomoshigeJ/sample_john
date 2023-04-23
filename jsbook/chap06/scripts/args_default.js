function getTriangleArea(base = 10, height = 5) {
  return base * height / 2;
}

console.log(getTriangleArea());
console.log(getTriangleArea(4));
console.log(getTriangleArea(1, 2));
console.log(getTriangleArea(5, null));
console.log(getTriangleArea(5, undefined));
