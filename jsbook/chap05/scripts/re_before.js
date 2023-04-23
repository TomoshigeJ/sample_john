function showResult(str, reg) {
  let results = str.matchAll(reg);
  for (let result of results) {
    console.log(result[0]);
  }
  console.log('-----------');
}

let re1 = /あい(?=うえ)/g;
let re2 = /あい(?!うえ)/g;
let re3 = /(?<=。)あい/g;
let re4 = /(?<!。)あい/g;
let str1 = 'あいうえおかきくけこ';
let str2 = 'あいすべきサルですね。あいあいは';

showResult(str1, re1);
showResult(str2, re1);
showResult(str1, re2);
showResult(str2, re2);
showResult(str1, re3);
showResult(str2, re3);
showResult(str1, re4);
showResult(str2, re4);
