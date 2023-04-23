import { getTriangleArea, Member } from './lib/export_separate.js';
// import { getTriangleArea, MyAppMember } from './lib/export_separate.js';

console.log(getTriangleArea(10, 2));

let m = new Member('佐藤理央', 25);
// let m = new MyAppMember('佐藤理央', 25);
m.show();
