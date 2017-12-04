# filter-string

Parse and stringify RESTFul filter string

# Install

```bash
npm install filter-string
```

# Use

## Stringify

```javascript
import { stringify } from 'filter-string'

const filters = [{
  key: 'a',
  op: 'eq',
  value: 'xxx'
}, {
  key: 'b',
  op: 'gt',
  value: 'yyy'
}]

const $filter = stringify(filters, {
  op: 'and'
})

// output
// a eq xxx and b gt yyy
```

## Parse

```javascript
import { parse } from 'filter-string'

const $filter = 'a eq xxx and b gt yyy'

const filters = parse($filter)

// output
// [{
//   key: 'a',
//   op: 'eq',
//   value: 'xxx'
// }, {
//   key: 'b',
//   op: 'gt',
//   value: 'yyy'
// }]
```
