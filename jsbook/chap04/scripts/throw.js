let x = 1;
let y = 0;

try{
  if (y === 0) {
    throw new Error('0で除算しようとしました。'); 
  }
  let z = x / y;
} catch(e) {
  console.log(e.message);
}
