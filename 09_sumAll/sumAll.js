const sumAll = function (n1, n2) {
  if (n1 < 0 || n2 < 0) return 'ERROR';

  let sum = 0;
  for (let i = n1; i <= n2; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
