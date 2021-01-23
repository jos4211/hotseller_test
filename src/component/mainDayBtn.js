import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const DayBtn = styled.button`
  border: none;
  border-radius: 5px;

  margin-bottom: 20px;
  & + & {
    margin-left: 10px;
  }

  background-color: ${(prope) => {
    return prope.isDay === prope.name ? "rgb(155,155,175)" : "rgb(196,196,227)";
  }};
`;

function MainDayBtn({ day1, day7, day30, onDayBtn, isDay }) {
  return (
    <>
      <DayBtn name={day1} onClick={onDayBtn} isDay={isDay}>
        최근 1일
      </DayBtn>
      <DayBtn name={day7} onClick={onDayBtn} isDay={isDay}>
        최근 7일
      </DayBtn>
      <DayBtn name={day30} onClick={onDayBtn} isDay={isDay}>
        최근 30일
      </DayBtn>
    </>
  );
}

export default MainDayBtn;
