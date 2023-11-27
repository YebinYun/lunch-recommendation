import React, { useState } from "react";
import styled from "styled-components";

const EnterDistrict = ({
  inputValue,
  setInputValue,
  options,
  setOptions,
  deselectedOptions,
}) => {
  const [hasText, setHasText] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // 드롭다운 검색결과 클릭했을때 창이 닫히도록 상태 추가
  const [selectedOption, setSelectedOption] = useState(null); // 검색결과 위아래 키입력 적용할 상태 추가
  const handleInputChange = (event) => {
    /**
     * handleInputChange 함수는
     * - input값 변경 시 발생되는 change 핸들러함수
     * - autocomplete 추천 항목이 dropdown으로 시시각각 변화되어 보여질 수 있도록 상태를 변경
     *
     * onChange 이벤트 발생 시
     * 1. input값 상태인 inputValue가 적절하게 변경
     * 2. input값 유무 상태인 hasText가 적절하게 변경
     * 3. autocomplete 추천 항목인 options의 상태가 적절하게 변경
     */
    setInputValue(event.target.value);
    setHasText(true);
    setOptions(
      deselectedOptions.filter((el) => {
        return el.startsWith(event.target.value);
      })
    );
    setShowDropdown(true);
  };

  const handleDeleteButtonClick = () => {
    /**
     * handleDeleteButtonClick 함수는
     * - input의 오른쪽에 있는 X버튼 클릭 시 발생되는 click 핸들러 함수
     * - 함수 작성을 완료하여 input값을 한 번에 삭제하는 기능을 구현
     *
     * onClick 이벤트 발생 시
     * 1. input값 상태인 inputValue가 빈 문자열로 상태변경
     */
    setInputValue("");
    setShowDropdown(false);
    setSelectedOption(null); // 삭제 버튼 클릭 시 선택된 옵션 초기화
  };

  const handleDropDownClick = (clickedOption) => {
    /**
     * handleDropDownClick 함수는
     * - autocomplete 추천 항목을 클릭할 때 발생되는 click 핸들러 함수
     * - dropdown에 제시된 항목을 눌렀을 때, input값이 해당 항목의 값으로 변경되는 기능을 수행
     *
     * onClick 이벤트 발생 시
     * 1. input값 상태인 inputValue가 적절하게 변경
     * 2. autocomplete 추천 항목인 options의 상태가 적절하게 변경.
     */
    setInputValue(clickedOption);
    setOptions([clickedOption]);
    setShowDropdown(false);
  };

  const handleKeyUp = (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      // 상하 화살표 키 입력 시 dropdown 항목 선택
      // 선택된 옵션이 없는 경우 첫 번째 옵션 선택

      // 현재 인덱스를 나타내는 변수와 마지막 인덱스 변수를 선언
      const currentIndex = options.indexOf(selectedOption);
      const lastIndex = options.length - 1;

      let newIndex;
      if (event.key === "ArrowUp") {
        // ↑ 버튼 입력 현재인덱스가 0번째 인덱스(첫번째)요소 일경우, 마지막 인덱스로 설정
        // 0번 인덱스가 아닌경우 현재 인덱스 -1
        newIndex = currentIndex <= 0 ? lastIndex : currentIndex - 1;
        // ↓ 버튼 입력 마지막 인덱스 일경우, 0번 인덱스로 설정
        // 마지막 인덱스가 아닌경우 현재 인덱스 +1
      } else if (event.key === "ArrowDown") {
        newIndex = currentIndex >= lastIndex ? 0 : currentIndex + 1;
      }
      // 위에서 구한 newIndex로 options[newIndex]로 값에 접근하고 해당 값을 selectedOption 값으로 상태변화
      setSelectedOption(options[newIndex]);
    } else if (event.key === "Enter") {
      // Enter 키 입력 시 선택된 dropdown 항목의 값으로 input값 변경
      // selectedOption 값이 있다면 (초기값은 null, 위에 작업을 거치면 값이 생김)
      if (selectedOption) {
        // inputValue 상태변화 (값변경)
        setInputValue(selectedOption);
        setShowDropdown(false); // 검색결과 앤터 클릭시 드랍다운 닫히도록
      }
    }
  };

  return (
    <div>
      <div className="dropDownContainer">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="지역구 입력"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyUp}
          ></input>
          <div className="deleteButton" onClick={handleDeleteButtonClick}>
            X
          </div>
        </div>

        {!hasText || !showDropdown ? (
          <MapChoice>
            지역구 미입력시,
            <br />
            랜덤으로 안내드립니다.
          </MapChoice>
        ) : (
          <DropDown
            options={options}
            handleComboBox={handleDropDownClick}
            selectedOption={selectedOption}
          />
        )}
      </div>
    </div>
  );
};

const MapChoice = styled.div`
  position: absolute;
  bottom: -60px;
  color: #777;
  width: 200px;
  line-height: 150%;
`;

// 지역구 입력값 보여주는 li
export const DropDownContainer = styled.ul`
  background-color: #fff2e9;
  position: absolute;
  top: 47.5px;
  width: 190px;
  list-style-type: none;
  margin-top: -1px;
  padding: 0.5rem 0 0 0.25rem;
  border: 2.2px solid black;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
  > li {
    padding: 0 0.7rem;
    text-align: left;
    font-size: 1.2rem;
    letter-spacing: 1px;
    margin: 0 0 7px 0;
    &.selected {
      background-color: #f9b2a6;
    }
    &:hover {
      background-color: #f9b2a6;
    }
  }
`;
export default EnterDistrict;

export const DropDown = ({ options, handleComboBox, selectedOption }) => {
  return (
    <DropDownContainer>
      {/* input 값에 맞는 autocomplete 선택 옵션이 보여지는 역할 */}
      {/* 검색결과 없을때 case 추가 */}
      {/* selectedOption props 추가 (드랍다운 키보드 입력시 하이라이트 css적용하기 위해) */}
      {options.length === 0 ? (
        <li>일치하는 검색 결과가 없습니다.</li>
      ) : (
        options.map((el, index) => (
          <li
            key={index}
            onClick={() => handleComboBox(el)}
            className={selectedOption === el ? "selected" : ""}
          >
            {el}
          </li>
        ))
      )}
    </DropDownContainer>
  );
};