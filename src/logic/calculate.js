import operate from './operate.js';

const calculate = ({ total, next, operation }, btnName) => {
  switch (btnName) {
    case '+/-':
      return [total, next].map((i) => i * -1);
    default:
      return operate(operation, total, next);
  }
};

export default calculate;