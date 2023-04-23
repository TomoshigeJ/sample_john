let type = ['NFD', 'NFC', 'NFKD', 'NFKC'];
let list = ['ギガ', 'ギガ', 'ｷﾞｶﾞ', '㌐'];

for (let t of type) {
  console.log(`■${t}`);
  for (let l of list) {
    console.log(`${l} => ${l.normalize(t)}`);
  }
}
