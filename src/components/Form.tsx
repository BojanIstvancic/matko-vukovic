import { Form, Formik } from "formik";
import Select from "./Select";
import TextInput from "./TextInput";
import { getInputs } from "@/utils/getInputs";

export interface FormikDynamicProps {
  formName: string;
  formType: string;
  handleSubmit: (values: any) => void;
  buttonName: string;
}

const FormikDynamic: React.FC<FormikDynamicProps> = ({
  formName,
  formType,
  handleSubmit,
  buttonName,
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

            <button className="btn" type="submit">
              {buttonName}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormikDynamic;
