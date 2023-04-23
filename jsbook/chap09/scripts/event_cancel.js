document.querySelector('#inner').addEventListener('click', function(e) {
  window.alert('#innerリスナーが発生しました。');
  e.stopPropagation();
  // e.stopImmediatePropagation();
  // e.preventDefault();
}, false);

document.querySelector('#inner').addEventListener('click', function() {
  window.alert('#innerリスナー2が発生しました。');
}, false);

document.querySelector('#outer').addEventListener('click', function() {
  window.alert('#outerリスナーが発生しました。');
}, false);
