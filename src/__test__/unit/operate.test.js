import Big from 'big.js';
import operate from '../../logic/operate.js';


it('basic operate test two input and operation', () => {
  const excepted = Big(0.03);
  expect(operate('%', 3)).toStrictEqual(excepted.toString());
});
