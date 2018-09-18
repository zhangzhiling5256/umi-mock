import floatObj from "../../src/utils/floatObj";

test('test floatObj.add', () => {
  expect(floatObj.add(1.19, 2.33)).toBe(3.52);
});
test('test floatObj.subtract', () => {
  expect(floatObj.subtract(4.44, 2.22)).toBe(2.22);
});
test('test floatObj.multiply', () => {
  expect(floatObj.multiply(2.2, 2.3)).toBe(5.06);
});
test('test floatObj.divide', () => {
  let num = floatObj.divide(5.6, 2.6);
  expect(floatObj.toFixed(num, 2)).toBe(2.15);
});