let els = document.querySelectorAll('input[type="text"]');

for(let el of els) {
  console.log(`${el.name}= ${el.disabled}／${el.getAttribute('disabled')}`);
}
