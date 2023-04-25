import styled from "@emotion/styled";
import { ErrorMessage, useField } from "formik";

const StyledSelectContainer = styled.div`
  position: relative;
  padding-bottom: 5px;
  margin-bottom: 23px;
`;

const SelectErrorMessage = styled(ErrorMessage)`
  position: absolute;
  top: 100%;
  left: 15px;
  font-size: 12px;
  color: var(--red-500);
`;

const StyledSelect = styled.select`
  font-size: 15px;
  padding: 15px;
  margin-left: 15px;
  border-radius: 4px;
`;

const StyledOption = styled.option`
  padding: 10px;

  &:hover,
  &:focus {
    background: var(--primary) !important;
    color: var(--white) !important;
  }
`;

interface SelectProps {
  options: Opt[];
  label: string;
  name: string;
  [x: string]: any;
}

type Opt = { value: string | number; desc: string };

const Select = ({ label, options, name, ...props }: SelectProps) => {
  const [field] = useField(name);

  return (
    <StyledSelectContainer>
      <div>
        <label htmlFor={name || props.id}> {label} </label>

        <StyledSelect {...field} {...props} className="selector">
          <StyledOption value="">--- Odaberi ---</StyledOption>

          {options.map(({ desc, value }) => (
            <StyledOption value={value} key={value}>
              {desc}
            </StyledOption>
          ))}
        </StyledSelect>
      </div>
      <SelectErrorMessage name={name} component="span" className="error" />
    </StyledSelectContainer>
  );
};

export default Select;
