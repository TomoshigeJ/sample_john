let result = document.querySelector('#result');
document.querySelector('#btn').addEventListener('click', function(){
  let params = new URLSearchParams();
  params.set('url', document.querySelector('#url').value);
  result.textContent = '通信中...';
  fetchJsonp(`https://b.hatena.ne.jp/entry/jsonlite/?${params.toString()}`)
    .then(res => res.json())
    .then(data =>{
      let ul = document.createElement('ul');
      for (let bm of data.bookmarks) {
        let li = document.createElement('li');
        let anchor = document.createElement('a');
        anchor.href = `https://b.hatena.ne.jp/${bm.user}`;
        anchor.textContent = `${bm.user} ${bm.comment}`;
        li.append(anchor);
        ul.append(li);
      }
      result.replaceChild(ul, result.firstChild);
    })
    .catch(ex => console.log(ex));
}, false);
