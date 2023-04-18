import styled from "@emotion/styled";
import { ErrorMessage, useField } from "formik";
import Image from "next/image";

const StyledUploadInputContainer = styled.div`
  position: relative;
  padding-bottom: 5px;
  margin-bottom: 23px;
`;

const StyledUploadInput = styled.input`
  display: block;
  max-width: 400px;
`;

const UploadInputErrrorMessage = styled(ErrorMessage)`
  position: absolute;
  top: 100%;
  left: 15px;
  font-size: 12px;
  color: var(--red-500);
`;

interface UploadInputProps {
  name: string;
  type: string;
  [x: string]: any;
}

const UploadInput = ({ image, ...props }: UploadInputProps) => {
  const [field] = useField(props);

  return (
    <StyledUploadInputContainer>
      <StyledUploadInput {...props} />
      {field.value && (
        <Image src={field.value} alt="upload-image" width={400} height={200} />
      )}
      <UploadInputErrrorMessage name={props.name} component="span" />
    </StyledUploadInputContainer>
  );
};

export default UploadInput;
