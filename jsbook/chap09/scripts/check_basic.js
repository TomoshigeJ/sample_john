document.querySelector('#btn').addEventListener('click', function() {
  let result = [];
  let foods = document.querySelectorAll('input[name="food"]');

  for (let food of foods) {
    if (food.checked) { result.push(food.value); }
  }
  console.log(result);
}, false);
