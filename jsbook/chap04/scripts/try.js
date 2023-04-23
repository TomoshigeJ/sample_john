let i = 1;

try{
  i = i * j;
} catch(e) {
  console.log(`${e.name}: ${e.message}`);
} finally {
  console.log('処理は完了しました。');
}