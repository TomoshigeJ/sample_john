function call1() {
  call2();
}

function call2() {
  call3();
}

function call3() {
  console.trace();
}

call1();
