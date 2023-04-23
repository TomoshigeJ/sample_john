const Decimal = require('decimal.js');
const d1 = new Decimal('0.14');
const d2 = new Decimal('0.28');
console.log(d1.add(d2).toNumber());
