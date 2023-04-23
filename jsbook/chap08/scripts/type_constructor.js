class Animal {}
class Hamster extends Animal {}

let ani = new Animal();
let ham = new Hamster();
console.log(ani.constructor === Animal);
console.log(ham.constructor === Animal);
console.log(ham.constructor === Hamster);

console.log(ham instanceof Animal);
console.log(ham instanceof Hamster);

console.log(Hamster.prototype.isPrototypeOf(ham));
console.log(Animal.prototype.isPrototypeOf(ham));
console.log(Object.prototype.isPrototypeOf(ham));
