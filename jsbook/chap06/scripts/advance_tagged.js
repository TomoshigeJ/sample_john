function escapeHtml(str) {
  if (!str) { return ''; }
  str = str.replaceAll(/&/g, '&amp;');
  str = str.replaceAll(/</g, '&lt;');
  str = str.replaceAll(/>/g, '&gt;');
  str = str.replaceAll(/"/g, '&quot;');
  str = str.replaceAll(/'/g, '&#39;');
  return str;
}

function e(templates, ...values) {
  let result = '';
  for (let [i, temp] of templates.entries()) {
    result += temp + escapeHtml(values[i]);
  }
  return result;
}

let name = '<"Mario" & \'Luigi\'>';
console.log(e`こんにちは、${name}さん！ `);
