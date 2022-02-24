import React from "react";
import { useUnicoSelfie } from "./hooks";
import * as S from "./styles";

const UnicoSelfieScreen = ({ closeModal, guarantor, student }) => {
  useUnicoSelfie(closeModal);

  return (
    <S.Container>
      <div className="container">
        <div id="box-camera"></div>
        <span>Sou {guarantor}, avalista de {student} na Provi</span>
      </div>
    </S.Container>
  );
};

export default UnicoSelfieScreen;
