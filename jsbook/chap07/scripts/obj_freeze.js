'use strict';

let pet = {
  type: 'スノーホワイトハムスター',
  name: 'キラ',
};

// Object.preventExtensions(pet);
// Object.seal(pet);
// Object.freeze(pet);

pet.name = '山田きら';
delete pet.type;
pet.weight = 42;
