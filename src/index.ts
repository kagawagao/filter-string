export type LogicOperator = 'and' | 'or'

const defaultOpts: Option = {
  op: 'and',
}

const isValid = (str: any): boolean => {
  return str !== undefined && str !== null && str !== ''
}

const LOGIC_OPERATORS: Array<LogicOperator> = ['and', 'or']

export interface Filter {
  key: string
  op: string
  value: any
}

export interface Option {
  op?: LogicOperator
  [key: string]: any
}

export function stringify(filters: Array<Filter>, options?: Option) {
  if (!filters) {
    return ''
  }
  const opts = {
    ...defaultOpts,
    ...options,
  }

  const { op: logicOp } = opts

  if (!LOGIC_OPERATORS.find((op) => op === logicOp)) {
    throw new TypeError(
      `Invalid Logic Operator, it should be one of ${LOGIC_OPERATORS.toString()}`
    )
  }

  const joiner = ` ${logicOp} `

  return filters
    .filter(
      ({ key, op, value }) => isValid(key) && isValid(op) && isValid(value)
    )
    .map(({ key, value, op }) => `${key} ${op} ${value}`)
    .join(joiner)
}

export function parse(filter: string) {
  if (!filter) {
    return []
  }
  const filters: Filter[] = []
  const temp: Filter = {
    key: '',
    op: '',
    value: '',
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
      if (
        LOGIC_OPERATORS.find((op) => op === groups[i + 1]) ||
        groups[i + 1] === null ||
        groups[i + 1] === undefined
      ) {
        isVal = false
        isKey = false
        isOp = false
        filters.push({ ...temp })
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
