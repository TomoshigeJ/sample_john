let list1 = [ 1, 2, 3, 4, 5 ];
let list2 = [
  [ 10, 20, 30 ],
  [ 40, 50, 60 ],
  [ 70, 80, 90 ],
];

let copy1 = Array.from(list1);
let copy2 = Array.from(list2);

list1[0] = 999;
list2[0][0] = 777;

console.log(list1);
console.log(copy1);
console.log(list2);
console.log(copy2);