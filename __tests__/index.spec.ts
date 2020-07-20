import * as filterString from '../src'

test('Should be parsed rightly', () => {
  // normally
  const $filter1 = 'a eq xxx and b gt yyy'
  const filters1 = filterString.parse($filter1)
  expect(filters1).toEqual([
    {
      key: 'a',
      op: 'eq',
      value: 'xxx',
    },
    {
      key: 'b',
      op: 'gt',
      value: 'yyy',
    },
  ])

  // some special
  const $filter2 = 'a eq xxx zzz and b gt yyy'
  const filters2 = filterString.parse($filter2)
  expect(filters2).toEqual([
    {
      key: 'a',
      op: 'eq',
      value: 'xxx zzz',
    },
    {
      key: 'b',
      op: 'gt',
      value: 'yyy',
    },
  ])

  // if filter is false, return empty array
  const $filter3 = ''
  const filters3 = filterString.parse($filter3)
  expect(filters3).toEqual([])
})

test('Should be stringified rightly', () => {
  // normally
  const filters1 = [
    {
      key: 'a',
      op: 'eq',
      value: 'xxx',
    },
    {
      key: 'b',
      op: 'gt',
      value: 'yyy',
    },
  ]
  const $filter1 = filterString.stringify(filters1)
  expect($filter1).toBe('a eq xxx and b gt yyy')
  // some special
  const filters2 = [
    {
      key: 'a',
      op: 'eq',
      value: 'xxx zzz',
    },
    {
      key: 'b',
      op: 'gt',
      value: 'yyy',
    },
  ]
  const $filter2 = filterString.stringify(filters2)
  expect($filter2).toBe('a eq xxx zzz and b gt yyy')

  const filters3 = []
  const $filter3 = filterString.stringify(filters3)
  expect($filter3).toBe('')

  const filters4 = null
  const $filter4 = filterString.stringify(filters4)
  expect($filter4).toBe('')

  const filters5 = [{}]
  // eslint-disable-next-line
  // @ts-expect-error
  const $filter5 = filterString.stringify(filters5)
  expect($filter5).toBe('')
})

test('Should throw error if Logic Operator not support', () => {
  const fn = () => {
    filterString.stringify(
      [
        {
          key: 'a',
          op: 'eq',
          value: 'xxx zzz',
        },
        {
          key: 'b',
          op: 'gt',
          value: 'yyy',
        },
      ],
      {
        // eslint-disable-next-line
        // @ts-expect-error
        op: 'xxx',
      }
    )
  }

  expect(fn).toThrowError()
})
