import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  width: 50%;
`;

const Box = styled.div`
  overflow: auto;
  width: 105%;

  -webkit-transition: height 1s, padding-bottom 2s;
  transition: height 1s, padding-bottom 2s;

  &.BoxClose {
    height: 20px;
    padding-bottom: 10px;
  }

  &.BoxOpen {
    height: 500px;
    padding-bottom: 300px;
    background-color: rgba(180, 180, 180, 0.1);
  }
`;

const OpenBtn = styled.div`
  width: 100%;
  position: absolute;
  color: white;
  bottom: 0px;
  background-color: rgb(150, 150, 150);
  cursor: pointer;
`;

function CategoryBox({ children }) {
  const [BoxClass, setBoxClass] = useState("BoxClose");
  const [OpenBtnText, setOpenBtnText] = useState("▼");

  const onClick = () => {
    if (OpenBtnText === "▼") {
      setOpenBtnText("▲");
      setBoxClass("BoxOpen");
    } else {
      setOpenBtnText("▼");
      setBoxClass("BoxClose");
    }
  };

  useEffect(async () => {}, []);

  return (
    <>
      <Wrap className={BoxClass}>
        <Box className={BoxClass}>{children}</Box>
        <OpenBtn onClick={onClick}>{OpenBtnText}</OpenBtn>
      </Wrap>
    </>
  );
}

export default CategoryBox;
