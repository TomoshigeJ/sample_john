var scope = 'Global Scope';

function getValue() {
  console.log(scope);
  var scope = 'Block Scope';
  return scope;
}

console.log(getValue());
console.log(scope);
