import operate from './operate.js';

const action = (state) => ({
  state,
  append(btnName) {
    if (this.state.target === 'after') {
      this.state.total = [];
      this.state.target = 'next';
      if (this.state.operation === '=') {
        this.clear();
      }
    }
    this.state.total.push(btnName);
    this.state[this.state.target] = this.state.total.join('');
    this.state = { ...this.state };
    return this;
  },
  clear() {
    this.state = {
      total: [], totalOne: '', next: '', operation: '', target: 'totalOne',
    };
    return this;
  },
  changeSign() {
    const [totalOne, next] = [this.state.totalOne, this.state.next].map((i) => `${Number(i) * -1}`);
    if (this.state.total[0] === '-') this.state.total.shift();
    if (totalOne < 0) this.state.total.unshift('-');
    this.state = { ...this.state, totalOne, next };
    return this;
  },
  setDotIfPossible(str = this.state.totalOne) {
    if ([...str.matchAll(/\./g)].length < 1) return this.append('0').append('.');
    return this;
  },
  mod() {
    this.state.totalOne = operate('%', Number(state.totalOne));
    this.state.total = this.state.totalOne.split('');
    this.state = { ...this.state };
    return this;
  },
  changeOperator(operator) {
    this.state.operation = operator;
    this.state = { ...this.state };
    return this;
  },
  calculate(btnName) {
    if (this.state.operation) {
      this.state.totalOne = operate(state.operation,
        Number(this.state.totalOne),
        Number(this.state.next));
      this.state.total = this.state.totalOne.split('');
      this.state.operation = btnName;
      this.state.target = 'after';
      this.state = { ...this.state };
      return this;
    }
    this.state.total = [];
    this.state.operation = btnName;
    this.state.target = 'next';
    return this;
  },
});


export default action;