import { ErrorMessage, useField } from "formik";

interface SelectProps {
  options: Opt[];
  label: string;
  name: string;
  [x: string]: any;
}

type Opt = { value: string | number; desc: string };

export const Select = ({ label, options, name, ...props }: SelectProps) => {
  const [field] = useField(name);

  return (
    <>
      <div>
        <label htmlFor={name || props.id}> {label} </label>

        <select {...field} {...props}>
          <option value="">--- Select ---</option>

          {options.map(({ desc, value }) => (
            <option value={value} key={value}>
              {desc}
            </option>
          ))}
        </select>
      </div>
      <ErrorMessage name={name} component="span" className="error" />
    </>
  );
};
