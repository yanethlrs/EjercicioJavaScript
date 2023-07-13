function fib(num) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= num; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

  console.log(fib(3));
  console.log(fib(7));