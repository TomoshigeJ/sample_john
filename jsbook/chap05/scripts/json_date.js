let org = {
  title: 'JavaScript本格入門',
  price: 2980,
  published: new Date(2022, 5, 25),
};
let js = JSON.stringify(org);
console.log(js);
// let obj = JSON.parse(js);
let obj = JSON.parse(js, function(key,value) {
  // if(key === '') return value;  
  if (typeof(value) == 'string' &&
      value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)) {
      return new Date(value);
  }
  return value;
});
console.log(obj);
console.log(obj.published.getFullYear());
