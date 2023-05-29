import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import { Modal } from "@mui/material";

import styled from "styled-components";

const StyledFun = styled.div``;

const HowToPlay = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const HowToPlayLabel = styled.span`
  margin-right: 15px;
  font-weight: 700;
`;

const InstructionsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: var(--white);

  &:not(.delete) {
    width: 50%;
    min-width: 300px;
    max-width: 500px;
  }

  h3 span {
    color: var(--primary);
    font-weight: bold;
  }
`;

export interface FunProps {
  openModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

const Fun: React.FC<FunProps> = ({
  openModal,
  handleOpenModal,
  handleCloseModal,
}) => {
  return (
    <StyledFun>
      <h1>Wordle</h1>
      <HowToPlay onClick={handleOpenModal}>
        <HowToPlayLabel>Kako igrati?</HowToPlayLabel>
        <FontAwesomeIcon
          icon={faCircleInfo}
          style={{ fontSize: 20, color: "var(--primary)" }}
        />
      </HowToPlay>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <InstructionsContainer>
          <p>lalal</p>
        </InstructionsContainer>
      </Modal>
    </StyledFun>
  );
};

export default Fun;
