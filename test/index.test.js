const test = require('ava')
const filterString = require('../src')

test('Should be parsed rightly', t => {
  // normally
  const $filter1 = 'a eq xxx and b gt yyy'
  const filters1 = filterString.parse($filter1)
  t.deepEqual([{
    key: 'a',
    op: 'eq',
    value: 'xxx'
  }, {
    key: 'b',
    op: 'gt',
    value: 'yyy'
  }], filters1)

  // some special
  const $filter2 = 'a eq xxx zzz and b gt yyy'
  const filters2 = filterString.parse($filter2)
  t.deepEqual([{
    key: 'a',
    op: 'eq',
    value: 'xxx zzz'
  }, {
    key: 'b',
    op: 'gt',
    value: 'yyy'
  }], filters2)
})

test('Should be stringified rightly', t => {
  // normally
  const filters1 = [{
    key: 'a',
    op: 'eq',
    value: 'xxx'
  }, {
    key: 'b',
    op: 'gt',
    value: 'yyy'
  }]
  const $filter1 = filterString.stringify(filters1)
  t.is('a eq xxx and b gt yyy', $filter1)
  // some special
  const filters2 = [{
    key: 'a',
    op: 'eq',
    value: 'xxx zzz'
  }, {
    key: 'b',
    op: 'gt',
    value: 'yyy'
  }]
  const $filter2 = filterString.stringify(filters2)
  t.is('a eq xxx zzz and b gt yyy', $filter2)
})

test('Should throw error if Logic Operator not support', t => {
  try {
    filterString.stringify([{
      key: 'a',
      op: 'eq',
      value: 'xxx zzz'
    }, {
      key: 'b',
      op: 'gt',
      value: 'yyy'
    }], {
      op: 'xxx'
    })
    t.fail()
  } catch (error) {
    t.pass()
  }
})
