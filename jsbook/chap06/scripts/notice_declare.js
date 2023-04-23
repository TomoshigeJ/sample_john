scope = 'Global Scope';

function getValue() {
  scope = 'Block Scope';
  return scope;
}
console.log(getValue());
console.log(scope);
