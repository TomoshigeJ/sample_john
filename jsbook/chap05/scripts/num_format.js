let num = 1234.567;
let fmt = new Intl.NumberFormat('ja-JP', {
  style:'currency', 
  currency: 'JPY',
  currencyDisplay: 'symbol'
});
console.log(fmt.format(num));