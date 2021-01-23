import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const ItemBox = styled(Button)`
  color: black !important;
  box-shadow: 2px 2px 5px 1px rgb(190, 190, 190) !important;
  border: none;
  width: 200px;
  height: 60px;
  background-color: rgb(242, 242, 251);
  border-radius: 10px 10px;

  & + & {
    margin: 10px;
  }

  &:first-child {
    margin: 10px;
  }

  &:hover {
    background-color: rgb(222, 222, 231);
  }
  &:focus {
    border: none;
    background-color: rgb(222, 222, 231) !important;
  }
`;

const TagName = styled.span`
  font-weight: bold;
`;

function MainTrendItem({
  date,
  hashtag,
  postCnt,
  checkStartTime,
  postGap,
  postRate,
  number,
}) {
  return (
    <Link to={"/" + hashtag}>
      <ItemBox name={hashtag}>
        <TagName>
          #{number}. {hashtag}
        </TagName>
      </ItemBox>
    </Link>
  );
}

export default MainTrendItem;
