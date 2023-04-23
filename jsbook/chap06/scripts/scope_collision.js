let scope = 'Global Scope';

function getValue() {
  let scope = 'Block Scope';
  return scope;
}

console.log(getValue());
console.log(scope);
