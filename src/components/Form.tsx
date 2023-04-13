import { useFormik } from "formik";
import { object, string, boolean, date, InferType } from "yup";

export const FormikBasic = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      rol: "",
      gender: "",
      terms: false,
    },
    validationSchema: object({
      fullName: string().min(3, "Min. 3 characters").required("Required"),
      email: string().email("It should be a valid email").required("Required"),
      password: string().min(6, "Min. 6 characters").required("Required"),
      terms: boolean().isTrue("You must accept the terms!"),
      rol: string().required("Required"),
      gender: string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form>
      <input type="text" placeholder="Full name" />

      <input type="email" placeholder="E-mail" />

      <input type="password" placeholder="Password" />

      <div>
        <label htmlFor="rol">Select an option:</label>
        <select id="rol">
          <option value="">--- Select ---</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="super">Super Admin</option>
        </select>
      </div>

      <div className="radio-group">
        <b>Gender: </b>
        <label>
          <input type="radio" /> Man
        </label>
        <label>
          <input type="radio" /> Woman
        </label>
        <label>
          <input type="radio" /> Other
        </label>
      </div>

      <label>
        <input type="checkbox" {...getFieldProps("terms")} />
        Terms and Conditions
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
