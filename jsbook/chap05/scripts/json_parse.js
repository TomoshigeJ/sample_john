let data = `{
  "isbn": "978-4-297-12635-3",
  "title": "TypeScript入門",
  "price": "2948"
}`;
let obj = JSON.parse(data);
console.log(obj);

let str = JSON.stringify(obj);
console.log(str);
