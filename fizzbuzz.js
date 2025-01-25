function fizzbuz(n) {
    for (let i = 1; i <= n; i++) {
      console.log(`${i} %3 ::`, i % 3);
      console.log(`${i} %5 ::`, i % 5);
      let f = i % 3 == 0;
      let b = i % 5 == 0;
  
      console.log('output :: ', f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
    }
}
  
fizzbuz(20);
  