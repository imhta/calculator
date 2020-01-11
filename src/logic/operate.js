import Big from 'big.js';


const operate = (operation, numOne, numTwo) => {
  numOne = Big(numOne);
  numTwo = Big(numTwo);
  const operateWith = {
    '+': (numOne, numTwo) => numOne.plus(numTwo).toString(),
    '-': (numOne, numTwo) => numOne.minus(numTwo).toString(),
    '*': (numOne, numTwo) => numOne.times(numTwo).toString(),
    '/': (numOne, numTwo) => numOne.div(numTwo).toString(),
    '%': (numOne, numTwo) => numOne.mod(numTwo).toString(),
  };
  return operateWith[operation](numOne, numTwo);
};

export default operate;