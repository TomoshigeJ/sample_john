let dt = new Date(2022, 11, 4, 20, 7, 15, 368);
let fmt = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  weekday: 'long',
  hour12: true,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  dayPeriod: 'short'
});
console.log(fmt.format(dt));