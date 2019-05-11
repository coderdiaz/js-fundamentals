// Fibonacci
var fibonacci = function(n) {
  var a = 0, b = 1, f = 1;
  for(var index = 2; index <= n; index++) {
    f = a + b;
    a = b;
    b = f;
  }
  return f;
}

for(var index = 1; index <= 100; index++) {
  console.log(fibonacci(index));
}