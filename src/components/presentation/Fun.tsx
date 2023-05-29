import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
import Modal from "../Modal";

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
        openModal={openModal}
        closeModal={handleCloseModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <p>lalal</p>
      </Modal>
    </StyledFun>
  );
};

export default Fun;
