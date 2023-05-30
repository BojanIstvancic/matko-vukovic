import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Wordle from "../wordle/Wordle";
import Modal from "../Modal";
import WordleInstructions from "../wordle/WordleInstructions";

import styled from "styled-components";
import { useState } from "react";

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

const Fun: React.FC<{ solution: string }> = ({ solution }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);
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
      <Wordle solution={solution} />
      <Modal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <WordleInstructions />
      </Modal>
    </StyledFun>
  );
};

export default Fun;
