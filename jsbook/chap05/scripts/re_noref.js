// let re = /([a-z\d+\-.]+)@([a-z\d\-]+(\.[a-z]+)*)/i;
let re = /([a-z\d+\-.]+)@([a-z\d\-]+(?:\.[a-z]+)*)/i;
let msg = 'メールアドレスはadmin@example.comです。';

let results = msg.match(re);
for (let result of results) {
  console.log(result);
}	