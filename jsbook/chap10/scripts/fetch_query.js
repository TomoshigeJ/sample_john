let result = document.querySelector('#result');
document.querySelector('#btn').addEventListener('click', function() {
  let params = new URLSearchParams();
  params.set('name', document.querySelector('#name').value);
  // fetch(`fetch_query.php?${params.toString()}`)

  fetch(`https://wings.msn.to/tmp/it/fetch_query.php?${params.toString()}`)

  // fetch(`https://wings.msn.to/tmp/it/fetch_query.php?${params.toString()}`, {
  //   mode: 'cors'
  // })
    .then(res => res.text())
    .then(text => result.textContent = text);
}, false);
