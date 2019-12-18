import operate from './operate.js';

const action = (state) => ({
  state,
  append(btnName) {
    if (this.state.target === 'after') {
      this.state.queue = [];
      this.state.target = 'next';
    }
    this.state.queue.push(btnName);
    this.state[this.state.target] = this.state.queue.join('');
    this.state = { ...this.state };
    return this;
  },
  clear() {
    this.state = {
      queue: [], total: '', next: '', operation: '', target: 'total',
    };
    return this;
  },
  changeSign() {
    const [total, next] = [this.state.total, this.state.next].map((i) => `${Number(i) * -1}`);
    if (this.state.queue[0] === '-') this.state.queue.shift();
    if (total < 0) this.state.queue.unshift('-');
    this.state = { ...this.state, total, next };
    return this;
  },
  setDotIfPossible(str = this.state.total) {
    if ([...str.matchAll(/\./g)].length < 1) return this.append('0').append('.');
    return this;
  },
  mod() {
    this.state.total = operate('%', Number(state.total));
    this.state.queue = this.state.total.split('');
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
      this.state.total = operate(state.operation,
        Number(this.state.total),
        Number(this.state.next));
      this.state.queue = this.state.total.split('');
      this.state.operation = btnName;
      this.state.target = 'after';
      this.state = { ...this.state };
      return this;
    }
    this.state.queue = [];
    this.state.operation = btnName;
    this.state.target = 'next';
    return this;
  },
  equalTo() {
    if (this.state.operation) {
      this.state.total = operate(state.operation,
        Number(this.state.total),
        Number(this.state.next));
      this.state.queue = this.state.total.split('');
      this.state.operation = '';
      this.state.target = 'total';
      this.state = { ...this.state };
      return this;
    }
    return this;
  },
});


export default action;