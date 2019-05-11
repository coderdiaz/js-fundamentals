// FizzBuzz Algorithm
var number = 15;
for (var index = 0; index < number; index++) {
  var value = index;
  if (index % 3 === 0) {
    value = 'Fizz';
    if (index % 5 === 0) {
      value += 'Buzz';
    }
  } else if (index % 5 === 0) {
    value = 'Buzz';
  }
  console.log(value);
}
