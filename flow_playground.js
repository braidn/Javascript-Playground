/* @flow */

function total(numbers: Array<number>) {
  var result = 0;
  for (var i = 0, len = numbers.length; i < len; i++) {
    result += numbers[i]
  }
  return result;
}

total([1,2,3,4,'hello']);
