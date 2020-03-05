export type LogicOperator = "and" | "or";

export interface Filter {
  key: string;
  op: string;
  value: any;
}

export interface Option {
  op?: LogicOperator;
  [key: string]: any;
}

export function stringify(filters: Array<Filter>, options: Option): string;

export function parse(filterStr: string): Array<Filter>;

export default {
  stringify
  parse
}
