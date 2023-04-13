import { Form, Formik } from "formik";
import Select from "./Select";
import TextInput from "./TextInput";

export interface FormikDynamicProps {
  formName: string;
  handleSubmit: (values: any) => void;
}

const FormikDynamic: React.FC<FormikDynamicProps> = ({
  formName,
  handleSubmit,
}) => {
  const { initialValues, inputs, validationSchema } = getInputs(formName);
  // create getInputs function
  // create handle Submit o
  // add create dynamic add Image input

  return (
    <Formik
      {...{ initialValues, validationSchema }}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {() => (
        <Form noValidate>
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

          <button className="btn btn_submit" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikDynamic;
