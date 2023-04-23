label: {
  console.log('Block start!!');
  (function() {
    break label;
  })();
  console.log('Block end!!');
}