let member = document.querySelector('#name');
document.querySelector('#btn').addEventListener('click', function() {
  console.log(member.value);
  console.log(member.getAttribute('value'));
}, false);
