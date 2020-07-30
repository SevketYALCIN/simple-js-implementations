const greet = require('./currying.js')

test('currying test', () => {
  let text = ''

  const nameFn = greet('Well hello')
  const puncFn = nameFn('Mr. Bean')
  text = puncFn('!')

  expect(text).toBe('Well hello Mr. Bean!')
})