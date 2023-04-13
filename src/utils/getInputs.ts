
import * as Yup from "yup";
import { forms, InputProps } from "./forms";

const generateValidations = (field: InputProps) => {
  let schema = Yup.string(); 

  for (const rule of field.validations) {
    switch (rule.type) {
        case "minLength": 
          schema = schema.min(rule.value as number, rule.message); 
        break;
        default: 
          schema = schema.required(rule.message); 
        break;
    }
  }

  return schema
}

export const getInputs = (section: string) => {
  let initialValues: { [key: string]: any } = {};

  let validationsFields: { [key: string]: any } = {};

  for (const field of forms[section]) {

      initialValues[field.name] = field.value;

      if (!field.validations) continue;

      const schema = generateValidations(field)

      validationsFields[field.name] = schema;
  }

  return {
      validationSchema: Yup.object({ ...validationsFields }),
      initialValues,
      inputs: forms[section],
  };
}