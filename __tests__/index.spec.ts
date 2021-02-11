import { calc, sq } from '../src/index';

describe('[index calc]', () => {
  test.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
    ${5} | ${5} | ${10}
  `('returns $expected when $a is added $b', ({ a, b, expected }) => {
    expect(calc(a, b)).toBe(expected);
  });

  test.each`
    a    | b    | expected
    ${2} | ${2} | ${2}
    ${1} | ${2} | ${6}
    ${2} | ${1} | ${4}
    ${5} | ${5} | ${11}
  `('returns not $expected when $a is added $b', ({ a, b, expected }) => {
    expect(calc(a, b)).not.toBe(expected);
  });
});

describe('[index sq]', () => {
  test.each`
    a    | b    | expected
    ${1} | ${1} | ${1}
    ${5} | ${5} | ${25}
    ${3} | ${3} | ${9}
    ${7} | ${7} | ${49}
  `('returns $expected when $a is added $b', ({ a, b, expected }) => {
    expect(sq(a, b)).toBe(expected);
  });

  test.each`
    a     | b     | expected
    ${2}  | ${2}  | ${3}
    ${3}  | ${3}  | ${8}
    ${7}  | ${7}  | ${14}
    ${10} | ${10} | ${20}
  `('returns not $expected when $a is added $b', ({ a, b, expected }) => {
    expect(sq(a, b)).not.toBe(expected);
  });
});
