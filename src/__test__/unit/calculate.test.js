import calculate from '../../logic/calculate.js';

it('basic operate test two input and calculate', () => {
  expect(calculate({
    queue: ['1'], total: '1', next: '1', operation: '+', target: 'next',
  }, '+')).toEqual({
    queue: ['2'], total: '2', next: '1', operation: '+', target: 'after',
  });
});

it('basic operate mod test', () => {
  expect(calculate({
    queue: ['1'], total: '1', next: '', operation: '', target: 'total',
  }, '%')).toEqual({
    queue: ['0', '.', '0', '1'], total: '0.01', next: '', operation: '', target: 'total',
  });
});
