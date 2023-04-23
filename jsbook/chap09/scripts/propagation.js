document.querySelector('#inner').addEventListener('click', function() {
  window.alert('#innerリスナーが発生しました。');
}, false);

// document.querySelector('#inner').addEventListener('click', function(e) {
//   window.alert('#innerリスナーが発生しました。');
// }, { capture: false });

document.querySelector('#inner').addEventListener('click', function() {
  window.alert('#innerリスナー2が発生しました。');
}, false);

document.querySelector('#outer').addEventListener('click', function() {
  window.alert('#outerリスナーが発生しました。');
}, false);
