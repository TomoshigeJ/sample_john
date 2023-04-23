// label1: {
//   console.log('label1 block');
//   break label2;
// }

// label2: {
//   console.log('label2 block');
// }

label2: {
  label1: {
   console.log('label1 block');
    break label2;
  }
  console.log('label2 block');
}