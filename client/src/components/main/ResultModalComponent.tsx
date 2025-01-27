import React from "react";
import styled from "styled-components";
import ModalComponent from "../layout/ModalComponent.tsx";

type props = {
  result: boolean;
  openModalHandler: () => void;
  colorChange: string;
  tittleFood: string[];
  iconFood: string[];
  viewResults: () => void;
};

const ResultModalComponent = ({
  result,
  openModalHandler,
  colorChange,
  tittleFood,
  iconFood,
  viewResults,
}: props) => {
  return (
    <ModalComponent
      modalClickHandler={openModalHandler}
      colorChange={colorChange}>
      <ResultContainer>
        <ResultTitle>
          {tittleFood && result ? (
            <h1>오늘은 {tittleFood}!</h1>
          ) : (
            <h1>음식을 추천중입니다...</h1>
          )}
        </ResultTitle>
        <ResultIcon>
          {iconFood &&
            iconFood.map((icon: string) => (
              <img src={icon} alt={`${tittleFood} 아이콘`} />
            ))}
        </ResultIcon>
        <ResultButton onClick={viewResults}>
          <p> 구경가기 </p>
        </ResultButton>
      </ResultContainer>
    </ModalComponent>
  );
};

const ResultContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > span {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 5px;
    right: 20px;
    font-size: 0;
    cursor: pointer;
  }
`;

const ResultTitle = styled.div`
  & h1 {
    font-size: 2.5rem;
    letter-spacing: 1.2rem;
  }
`;

const ResultIcon = styled.div`
  display: flex;
  & img {
    margin: 3rem;
  }
`;

const ResultButton = styled.button`
  background-color: #fcbda0;
  border: 3px solid black;
  border-radius: 15px;
  & p {
    padding: 1.5rem 2rem;
    font-size: 1.5rem;
    letter-spacing: 0.8rem;
  }
  &:hover {
    background-color: #fd8c58;
    transition: 0.5s;
    cursor: pointer;
  }
`;

export default ResultModalComponent;
