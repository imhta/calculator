import Big from 'big.js';

const big100 = Big(100);
// const bigZero = Big(0);
// const bigOne = Big(1);

const operate = (operation, numOne, numTwo) => {
  numOne = Big(numOne);
  numTwo = Big(numTwo);
  const operateWith = {
    '+': (numOne, numTwo) => numOne.plus(numTwo).toString(),
    '-': (numOne, numTwo) => numOne.minus(numTwo).toString(),
    '*': (numOne, numTwo) => numOne.times(numTwo).toString(),
    '/': (numOne, numTwo) => numOne.div(numTwo).toString(),
    '%': (numOne) => numOne.div(big100),
  };
  return operateWith[operation](numOne, numTwo);
};

export default operate;