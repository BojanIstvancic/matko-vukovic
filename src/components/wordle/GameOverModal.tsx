import { useState, useEffect } from "react";

import Modal from "../Modal";

import styled from "@emotion/styled";

export interface GameOverModal {
  isCorrect: boolean;
  turn: number;
  solution: string;
}

const GameOverContent = styled.div``;
const GameOverText = styled.p`
  b {
    color: var(--primary);
  }
`;

const GameOverModal: React.FC<GameOverModal> = ({
  isCorrect,
  turn,
  solution,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  useEffect(() => {
    if (isCorrect || turn > 5) {
      handleOpenModal();
    }
  }, [isCorrect, turn]);

  return (
    <Modal
      openModal={openModal}
      handleCloseModal={handleCloseModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <GameOverContent>
        <h1>Rezultat</h1>
        {isCorrect && (
          <GameOverText>
            Čestitamo! Uspešno ste pogodili traženu reč iz <b>{turn}.</b>{" "}
            pokušaja.
          </GameOverText>
        )}
        {!isCorrect && turn > 5 && (
          <GameOverText>
            Tražena reč je bila <b>{solution}</b>. Više sreće drugi put!
          </GameOverText>
        )}
        <GameOverText>
          Ako želite da ponovite igru, osvežite stranicu.
        </GameOverText>
      </GameOverContent>
    </Modal>
  );
};

export default GameOverModal;
