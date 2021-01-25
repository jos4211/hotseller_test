import React, { useState, useEffect } from "react";
import styled from "styled-components";

// 카테고리를 선택할 수 있는 카테고리 버튼

const CateBtn = styled.button`
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 5px;
  & + & {
    margin-left: 10px;
  }

  background-color: ${(prope) => {
    return prope.activeBtn === prope.name ? "gray" : "white";
  }};

  color: ${(prope) => {
    return prope.activeBtn === prope.name ? "white" : "black";
  }};
`;

// btnData: btn에 이름 json의 객체 키값이 들어있는 객체 배열
// onClickBtn: 카테고리버튼을 클릭시 발생하는 이벤트
// activeBtn: 현재 활성화된 카테고리 버튼 name을 가져오기

function CategoryBtn({ btnData, onClickBtn, activeBtn }) {
  // 가져온  btnData의 객체 개수만큼 버튼을 생성해 저장해두는 state
  const [button, setButton] = useState(null);

  useEffect(() => {
    setButton(
      btnData.map((value, index) => {
        return (
          <CateBtn
            key={index}
            name={value.btnName}
            onClick={onClickBtn}
            activeBtn={activeBtn}
          >
            {value.btnText}
          </CateBtn>
        );
      })
    );
  }, [btnData]);

  return <>{button}</>;
}

export default CategoryBtn;
