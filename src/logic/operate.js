import Big from 'big.js';

const big100 = Big(100);

const operate = (operation, numOne, numTwo) => {
  numOne = Big(numOne);
  numTwo = Big(numTwo);
  const operateWith = {
    '+': (numOne, numTwo) => numOne.plus(numTwo || 0).toString(),
    '-': (numOne, numTwo) => numOne.minus(numTwo || 0).toString(),
    x: (numOne, numTwo) => numOne.times(numTwo || 1).toString(),
    '÷': (numOne, numTwo) => numOne.div(numTwo || 1).toString(),
    '%': (numOne) => numOne.div(big100).toString(),
  };
  return operateWith[operation](numOne, numTwo);
};

export default operate;