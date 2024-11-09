//Practice Problems from Hacker Rank

//1. Plus Minus
//2. Mini-Max Sum
//3. Time Conversion

//1. Plus Minus
//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
//Print the decimal value of each fraction on a new line with places after the decimal.

export function plusMinus(arr: any) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  arr.forEach((num: any) => {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  });

  let ArrayTotal = arr.length;

  return [
    (positiveCount / ArrayTotal).toFixed(6),
    (negativeCount / ArrayTotal).toFixed(6),
    (zeroCount / ArrayTotal).toFixed(6),
  ];
}
