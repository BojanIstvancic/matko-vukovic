
import * as Yup from "yup";
import { forms, InputProps } from './forms';

const generateValidations = (field: InputProps) => {
  let schema = Yup.string(); 

  for (const rule of field.validations) {
    switch (rule.type) {
        case 'minLength': schema.min(rule?.value as number, rule.message); break;
        default: schema = schema.required(rule.message); break;
    }
  }

  return schema
}