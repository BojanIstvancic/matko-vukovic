import { Modal } from "@mui/material";
import styled from "styled-components";

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: var(--white);
  min-width: 350px;
  max-width: 700px;

  h3 span {
    color: var(--primary);
    font-weight: bold;
  }
`;

export interface ModalProps {
  handleCloseModal: () => void;
  openModal: boolean;
  children: JSX.Element;
}

const StyledModal: React.FC<ModalProps> = ({
  handleCloseModal,
  openModal,
  children,
}) => (
  <Modal
    open={openModal}
    onClose={handleCloseModal}
    aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
  >
    <ModalContent>{children}</ModalContent>
  </Modal>
);

export default StyledModal;
