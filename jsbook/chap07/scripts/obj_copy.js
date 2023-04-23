let pet = {
  name: 'キラ',
  description: {
    birth: '2014-02-15'
  },
};

let copied = Object.assign({}, pet);
// let copied = { ...pet };

console.log(pet);
console.log(copied);
console.log(pet === copied);
