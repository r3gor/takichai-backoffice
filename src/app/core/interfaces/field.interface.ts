import { ValidatorFn } from '@angular/forms';

export interface IField {
  key         : string
  label       : string;
  type?       : string;
  options?    : IOption[];
  placeholder?: string;
  default?    : string | number;
  validators? : ValidatorFn[];
  disabled?   : boolean;
  hint?: string;
  optionalField?: boolean;
  optionalFieldLabel?: string;
}

// TODO: DEBE SER EL MISMO DEL TYPE CONFIG
interface IOption {
  value: any;
  label: string;
}
