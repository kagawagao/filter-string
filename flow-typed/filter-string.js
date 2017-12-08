declare type LogicOperator = 'and' | 'or';

declare type Filter = {
  key: string | '',
  op: string | Operator | '',
  value: '' | string
};

declare type Option = {
  op?: LogicOperator,
  [key: any]: any
};

declare function stringify(filters: Array<Filter>, options: Option): string;

declare function parse(filterStr: string): Array<Filter>;

declare module 'filter-string' {
  declare export function stringify(filters: Array<Filter>, options: Option): string
  declare export function parse(filterStr: string): Array<Filter>
};
