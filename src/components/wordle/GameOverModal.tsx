import { useState, useEffect } from "react";

import Modal from "../Modal";

import styled from "@emotion/styled";

import Congratulations from "/public/images/pages/zabava/congratulations.png";
import Luck from "/public/images/pages/zabava/luck.png";
import Image from "next/image";

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
const GameOverImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const GameOverModal: React.FC<GameOverModal> = ({
  isCorrect,
  turn,
  solution,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  const numberText = [
    "prvog",
    "drugog",
    "trećeg",
    "četvrtog",
    "petog",
    "šestog",
  ];

  useEffect(() => {
    if (isCorrect || turn > 5) {
      setTimeout(() => handleOpenModal(), 1000);
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
            Čestitamo! Uspešno ste pogodili traženu reč iz{" "}
            <b>{numberText[turn - 1]} </b>
            pokušaja.
          </GameOverText>
        )}
        {!isCorrect && turn > 5 && (
          <GameOverText>
            Tražena reč je bila <b>{solution}</b>. Više sreće drugi put!
          </GameOverText>
        )}
        <GameOverText style={{ marginBottom: "20px" }}>
          Ako želite da ponovite igru, osvežite stranicu.
        </GameOverText>

        <GameOverImageContainer>
          <Image
            src={isCorrect ? Congratulations : Luck}
            alt={isCorrect ? "srecno" : "cestitamo"}
            width={250}
            height={250}
          />
        </GameOverImageContainer>
      </GameOverContent>
    </Modal>
  );
};

export default GameOverModal;
