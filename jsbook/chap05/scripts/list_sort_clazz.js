let classes = [ '部長', '課長', '主任', '担当' ];
let members = [
  { name: '鈴木清子', clazz: '主任' },
  { name: '山口久雄', clazz: '部長' },
  { name: '井上太郎', clazz: '担当' },
  { name: '和田知美', clazz: '課長' },
  { name: '小森雄太', clazz: '担当' },
];

console.log(members.sort(function(x, y) {
  return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
}));
