import { IField } from "../interfaces/field.interface";

// construye el objeto en el formato que necesita el FormBuilder.group
export const buildFormGroup = (fields: IField[]) => {
  const reducer = (prev: any, curr: any) => {
    return { ...prev, [curr.key]: [{value: curr.default, disabled: !!curr.disabled} , curr.validators] };
  };
  
  return fields.reduce(reducer, {});
};