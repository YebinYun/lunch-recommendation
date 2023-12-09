import React from "react";
import styled from "styled-components";
import ModalContainer from "../../pages/layout/ModalContainer";
import { PUBLIC_MAP_IMAGE } from "../../assets/images/images";

const MapModal = ({ modalClickHandler, colorChange }) => {
  return (
    <ModalContainer
      modalClickHandler={modalClickHandler}
      colorChange={colorChange}>
      <GuideMapWrapper>
        <h1> [ 서울시 지도 ] </h1>
        <img src={PUBLIC_MAP_IMAGE.seoulMap} alt="서울 지도" />
      </GuideMapWrapper>
    </ModalContainer>
  );
};

const GuideMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & h1 {
    text-align: center;
    padding-top: 25px;
  }
  & img {
    width: 40vw;
    height: 50vh;
  }
`;

export default MapModal;