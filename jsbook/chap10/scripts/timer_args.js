let handler = function(message) {
  console.log(message);
};

setTimeout(handler, 500, '開始時間です。始めてください。');
setTimeout(handler, 10000, '終了です。作業を止めてください。');
