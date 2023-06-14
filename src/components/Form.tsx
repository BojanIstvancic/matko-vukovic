import { Form, Formik } from "formik";
import { getInputs } from "@/utils/getInputs";

import Select from "./Select";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import UploadInput from "./UploadInput";
import Button from "./Button";
import DateInput from "./DateInput";

export interface FormikDynamicProps {
  formName: string;
  formType: string;
  handleSubmit: (values: any) => void;
  buttonName: string;
  buttonType?: string;
  customInitialValues?: { [key: string]: any } | undefined;
}

const FormikDynamic: React.FC<FormikDynamicProps> = ({
  formName,
  formType,
  handleSubmit,
  buttonName,
  buttonType,
  customInitialValues,
}) => {
  const { inputs, validationSchema } = getInputs(formType);
  let { initialValues } = getInputs(formType);

  if (customInitialValues) {
    initialValues = customInitialValues;
  }

  return (
    <>
      <h1 style={{ width: "100%" }}>{formName}</h1>
      <Formik
        {...{ initialValues, validationSchema }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {() => (
          <Form noValidate style={{ width: "100%" }}>
            {inputs.map(({ name, type, value, ...props }) => {
              switch (type) {
                case "select":
                  return (
                    <Select
                      key={name}
                      label={props.label!}
                      name={name}
                      options={props.options!}
                    />
                  );
                case "textarea":
                  return (
                    <TextArea
                      key={name}
                      name={name}
                      placeholder={props.placeholder}
                      type={type}
                    />
                  );
                case "file":
                  return <UploadInput key={name} name={name} type={type} />;
                case "date":
                  return (
                    <DateInput
                      key={name}
                      name={name}
                      placeholder={props.placeholder}
                      type={type}
                    />
                  );
                default:
                  return (
                    <TextInput
                      key={name}
                      name={name}
                      placeholder={props.placeholder}
                      type={type}
                    />
                  );
              }
            })}

            <Button type="submit" buttonType={buttonType}>
              {buttonName}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormikDynamic;
