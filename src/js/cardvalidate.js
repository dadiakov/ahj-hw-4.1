/* eslint-disable linebreak-style */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable no-param-reassign */
/* eslint-disable no-bitwise */
export default function cardValidate(anum) {
  anum += '';
  let sum = 0;
  const max = anum.length - 1;
  for (let j = max; j >= 0; j--) {
    const digit = parseInt(anum[j]);
    if ((max - j) & 1) {
      const add = digit * 2;
      sum += add < 10 ? add : 1 + add % 10;
    } else {
      sum += digit;
    }
  }
  return sum % 10 === 0;
}
