function fizzBuzz(countTo) {
  var answer = [];
  for (var i = 1; i <= countTo; i++) {
    if (i % 15 === 0) { // I originally had % 3 first... why didn't it work?
      answer.push("fizzbuzz");
    }
    else if (i % 5 === 0){
      answer.push("buzz");
    }
     else if (i % 3 === 0){
      answer.push("fizz");
    }
    else {
      answer.push(i);
    }
  }
  return answer;
}

// 5, 6, 9, 10, 12, 15, 18, 30, 
// > 60 (B), >80 (A)