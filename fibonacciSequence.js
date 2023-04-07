// First 2 numbers in sequence are 0,1
// fib(2) = [0,1]
// fib(3) = [0,1,1]
// fib(4) =[0,1,1,2]
// sum of prev 2 #'s equals next number in sequence

// fib = n+n
// needs to interate ?
// make an array with the first 2 starting points
// for loop that starts at index of 2

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacci(2));
