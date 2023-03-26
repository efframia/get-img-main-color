const getMainColor = require('../dist/getMainColor');

test('left area', async () => {
  expect(await getMainColor('test/test.png', {x: 0, y: 0, width: 100, height: 100})).toBe('rgb(4,245,0)');
});

test('right image', async () => {
  expect(await getMainColor('test/test.png', {x: 100, y: 0, width: 100, height: 100})).toBe('rgb(203,245,203)');
});

test('full image', async () => {
  expect(await getMainColor('test/test.png')).toBe('rgb(103,245,101)');
});
