import styled from "@emotion/styled";
import { ErrorMessage, useField, useFormikContext } from "formik";
import Image from "next/image";
import { useRef, useState } from "react";

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

const UploadInput = ({ ...props }: UploadInputProps) => {
  const [field] = useField(props);
  const fileRef = useRef(field.value);
  const [inputImage, setInputImage] = useState(field.value);

  const { setFieldValue } = useFormikContext();

  const handleChange = () => {
    setFieldValue(field.name, fileRef.current.files[0]);
    setInputImage(URL.createObjectURL(fileRef.current.files[0]));
  };

  return (
    <StyledUploadInputContainer>
      <StyledUploadInput
        {...props}
        name={field.name}
        ref={fileRef}
        onChange={handleChange}
      />
      <Image src={inputImage} alt="upload-image" width={400} height={200} />
      <UploadInputErrrorMessage name={props.name} component="span" />
    </StyledUploadInputContainer>
  );
};

export default UploadInput;
