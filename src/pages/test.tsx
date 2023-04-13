import { Formik, Form } from "formik";

const FormikDynamic = () => {
  return (
    <Formik
      initialValues={{}}
      validationSchema={{}}
      onSubmit={(values) => console.log(values)}
    >
      {() => (
        <Form noValidate>
          <button className="btn btn_submit" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

const Test: React.FC<{}> = () => {
  return <FormikDynamic />;
};

export default Test;
