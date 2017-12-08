// @flow
const OPERATORS: Array<Operator> = ['eq', 'gt', 'ge', 'lt', 'le', 'ne', 'in', 'ni']

const LOGIC_OPERATORS: Array<LogicOperator> = ['and', 'or']

const defaultOpts: Option = {
  op: 'and'
}

export const stringify = (filters: Array<Filter>, options: Option = {}): string => {
  if (!filters) {
    return ''
  }
  const opts = {
    ...defaultOpts,
    ...options
  }

  const { op: logicOp } = opts

  if (!LOGIC_OPERATORS.find(op => op === logicOp)) {
    throw new TypeError(`Invalid Logic Operator, it should be one of ${LOGIC_OPERATORS.toString()}`)
  }

  const joiner: string = ` ${logicOp} `

  return filters.filter(({ op }) => OPERATORS.find(operator => op === operator)).map(({ key, value, op }) => `${key} ${op} ${value}`).join(joiner)
}

export const parse = (filter: string): Array<Filter> => {
  if (!filter) {
    return []
  }
  const filters = []
  const temp: Filter = {
    key: '',
    op: '',
    value: ''
  }

  const groups = filter.split(' ')
  let isKey = true
  let isOp = false
  let isVal = false
  groups.map((str, i) => {
    if (isKey) {
      temp.key = str
      isKey = false
      isOp = true
    } else if (isOp) {
      temp.op = str
      isOp = false
      isVal = true
    } else if (isVal) {
      temp.value = temp.value ? temp.value + ` ${str}` : str
      if (LOGIC_OPERATORS.find(op => op === groups[i + 1]) || groups[i + 1] === null || groups[i + 1] === undefined) {
        isVal = false
        isKey = false
        isOp = false
        filters.push({...temp})
        temp.key = ''
        temp.op = ''
        temp.value = ''
      }
    } else {
      isKey = true
    }
  })

  return filters
}

export default {
  stringify,
  parse
}
