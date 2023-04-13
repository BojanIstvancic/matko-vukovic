import { Formik, Form } from "formik";

export const FormikDynamic = () => {
  return (
    <Formik
      initialValues={{}}
      validationSchema={{}}
      onSubmit={(values) => console.log(values)}
    >
      {() => (
        <Form noValidate>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
