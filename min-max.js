function max(numbers) {
  var maxNum = numbers[0]; //create point of comparison and placeholder
  for (var i = 1; i < numbers.length; i++) { //loop through array
    if (maxNum < numbers[i]) { //compare current num to maxNum
      maxNum = numbers[i];// if larger, replace maxNum
    }
  }
  return maxNum;
}

function min(numbers) {
  var minNum = numbers[0]; //create point of comparison and placeholder
  for (var i = 1; i < numbers.length; i++) { //loop through array
    if (minNum > numbers[i]) { //compare current num to minNum
      minNum = numbers[i];// if smaller, replace minNum
    }
  }
  return minNum;
}

/**
 * @return [min, max]
 */
function minMax(numbers) {
  var minNum = numbers[0]
  var maxNum = numbers[0]
  for (var i = 1; i < numbers.length; i++) {
    if (minNum > numbers[i]) {
      minNum = numbers[i];
    }
    if (maxNum < numbers[i]) {
      maxNum = numbers[i];
    }
  }
  return [minNum, maxNum];
}

// test
var a = [10, 5, 2, 3, 6, 8, 9];

var b = [90, -10, 5, 6, 8, 20, -30];

console.log(max(a), min(a), max(b), min(b));

result = minMax(a);
console.log('min:', result[0], 'max:', result[1]);
