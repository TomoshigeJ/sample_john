let s = document.querySelector('#food');
let child = s.firstElementChild;
while (child) {
  console.log(child.value);
  child = child.nextElementSibling;
}
