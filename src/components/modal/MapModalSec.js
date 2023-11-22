import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
// import mapImg from "../../../public/images/mapImg.png";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  border-bottom: 0px;
  width: 1100px;
  height: 720px;
  text-align: center;
  z-index: 999;
`;

// 상단바-1.
const TopBarWrap = styled.div`
  border-bottom: 3px solid black;
  height: 7%;
  background: #ffb630;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

// 상단바-2
const SecondBarWrap = styled(TopBarWrap)`
  height: 5%;
  background: white;
  border-bottom: 0px;
`;

// 메인창
const MainWrap = styled.div`
  height: 80%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 지도 이미지
const MapImg = styled.img`
  height: 550px;
  width: 700px;
  padding-bottom: 40px;
`;

// 하단바
const FooterBarWrap = styled(TopBarWrap)`
  border-radius: 0px 0px 5px 5px;
  border-top: 3px solid black;
  justify-content: flex-start;
  font-size: 1.3rem;
  > div {
    margin: 0 10px 0 0;
    > img {
      width: 40px;
      height: 40px;
    }
  }
`;

// 상단 동작 버튼 div
const AcctionBtnWrap = styled.div`
  display: flex;
`;

// 상단 동작 버튼
const AcctionBtn = styled.button`
  background-color: transparent;
  border: none;
  margin: 10px;
  padding: 0;
`;

// 버튼 이미지
const AcctionImg = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  cursor: pointer;
`;

const MapModalSec = ({ closeModal }) => {
  return (
    <ModalBackground>
      <Container>
        {/* 상단바-1 */}
        <TopBarWrap>
          {/* 동작 버튼 */}
          <AcctionBtnWrap>
            {/* 방향키 */}
            <AcctionBtn>
              <Icon icon="fluent-emoji-high-contrast:right-arrow" rotate={2} />
            </AcctionBtn>
            <AcctionBtn>
              <Icon icon="fluent-emoji-high-contrast:right-arrow" />
            </AcctionBtn>
          </AcctionBtnWrap>

          {/* 동작 버튼 */}
          <AcctionBtnWrap>
            <AcctionBtn>
              <Icon icon="ic:round-minimize" />
            </AcctionBtn>
            <AcctionBtn>
              <Icon icon="ep:close-bold" onClick={closeModal} />
            </AcctionBtn>
          </AcctionBtnWrap>
        </TopBarWrap>

        {/* 일단 흰 배경으로 감춤.. 추후 없애는 편으로.. */}
        <SecondBarWrap />

        {/* 메인창 */}
        <MainWrap>
          {/* <MapImg src={mapImg} alt="서울시 25개 지구" /> */}
        </MainWrap>

        {/* 하단바 */}
        <FooterBarWrap>
          <Icon icon="fluent-emoji-flat:face-savoring-food" />
          <div>I LOVE SEOUL</div>
        </FooterBarWrap>
      </Container>
    </ModalBackground>
  );
};

export default MapModalSec;