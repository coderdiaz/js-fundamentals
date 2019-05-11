// Fibonacci
var fibonacci = function(n) {
  var total = 0;
  for(var index = 1; index <= n; index++) {
    total += index;
  }
  return total;
}

console.log(fibonnaci(5));