export interface Column<T> {
    label: string;
    value: any;
  
  }
  interface Props<T> {
    columns: Column<T>[];
    data: T[];}