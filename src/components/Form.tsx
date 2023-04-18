import { Form, Formik } from "formik";
import Select from "./Select";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import { getInputs } from "@/utils/getInputs";
import Button from "./Button";

export interface FormikDynamicProps {
  formName: string;
  formType: string;
  handleSubmit: (values: any) => void;
  buttonName: string;
  buttonType?: string;
}

const FormikDynamic: React.FC<FormikDynamicProps> = ({
  formName,
  formType,
  handleSubmit,
  buttonName,
  buttonType,
}) => {
  const { initialValues, inputs, validationSchema } = getInputs(formType);
  // create getInputs function
  // create handle Submit o
  // add create dynamic add Image input

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
