import action from './action.js';

const calculate = (state, btnName) => {
  const isOperator = (str) => /^['+','\-','x','÷','=']$/.test(str);


  if (isOperator(btnName)) {
    if (state.target === 'after') return action(state).changeOperator(btnName).state;
    return action(state).calculate(btnName).state;
  }

  switch (btnName) {
    case 'AC':
      return action(state).clear().state;
    case '+/-':
      return action(state).changeSign().state;
    case '.':
      return action(state).setDotIfPossible().state;
    case '%':
      return action(state).mod().state;
    default:
      return action(state).append(btnName).state;
  }
};

export default calculate;