let dat = new Date(2022, 4, 15, 11, 40);
console.log(dat);
dat.setMonth(dat.getMonth() + 1);
dat.setDate(0);
console.log(dat);
