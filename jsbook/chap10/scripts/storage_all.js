let storage = localStorage;
for (let i = 0; i < storage.length; i++) {
  let key = storage.key(i);
  console.log(`${key}：${storage[key]}`);
  // console.log(`${key}：${storage.getItem(key)}`);
}
