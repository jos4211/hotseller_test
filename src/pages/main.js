import React, { useState, useEffect } from "react";
import * as tagData from "../lib/api/getData";
import CategoryData from "../component/categoryData";
import CategoryBtn from "../component/categoryBtn";
import CategoryBox from "../container/catagoryBox";
import styled from "styled-components";

/*
  main페이지로 처음 화면 페이지
*/

const CategoryContainer = styled.div`
  position: relative;
  margin-bottom: 170px;
  text-align: center;
  height: auto;
`;

function Main() {
  // json에서 가져온 데이터 저장 하기 state
  const [trendData, setTrendData] = useState(tagData.trendData);

  // 카테고리버튼에 어떤 버튼이 활성화 되있는지 확인하기 위한 state
  const [gapActiveBtn, setGapActiveBtn] = useState("day1_gap");
  const [rateActiveBtn, setRateActiveBtn] = useState("day1_rate");

  // gap카테고리 버튼에 들어갈 기본 설정 테이터
  const gapBtnData = [
    {
      btnText: "최근 1일",
      btnName: "day1_gap",
    },
    { btnText: "최근 7일", btnName: "day7_gap" },
    { btnText: "최근 30일", btnName: "day30_gap" },
  ];

  // reate카테고리 버튼에 들어갈 기본 설정 테이터
  const reateBtnData = [
    {
      btnText: "최근 1일",
      btnName: "day1_rate",
    },
    { btnText: "최근 7일", btnName: "day7_rate" },
    { btnText: "최근 30일", btnName: "day30_rate" },
  ];

  useEffect(async () => {
    // json 데이터 가져오기
    const getTrendData = await tagData.trendData;

    // 가져온 데이터를 trendData state에 저장
    setTrendData(getTrendData);
  }, []);

  // gap 카테고리 버튼 클릭시
  const onGapDayBtn = (e) => {
    setGapActiveBtn(e.target.name);
  };

  // rate 카테고리 버튼 클릭시
  const onRateDayBtn = (e) => {
    setRateActiveBtn(e.target.name);
  };

  return (
    <>
      <h1>main</h1>
      <CategoryContainer>
        <h2>포스팅 증가량 순위</h2>
        <CategoryBox>
          <CategoryBtn
            btnData={gapBtnData}
            onClickBtn={onGapDayBtn}
            activeBtn={gapActiveBtn}
          />
          <CategoryData
            data={trendData}
            day={gapActiveBtn}
            category="posting"
          />
        </CategoryBox>
      </CategoryContainer>

      <CategoryContainer>
        <h2>포스팅 증가율 순위</h2>
        <CategoryBox>
          <CategoryBtn
            btnData={reateBtnData}
            onClickBtn={onRateDayBtn}
            activeBtn={rateActiveBtn}
          />
          <CategoryData
            data={trendData}
            day={rateActiveBtn}
            category="posting"
          />
        </CategoryBox>
      </CategoryContainer>

      <CategoryContainer>
        <h2>새롭게 분석 대상이 된 해시태그</h2>
        <CategoryBox>
          <CategoryData data={trendData.recent_list} category="recent" />
        </CategoryBox>
      </CategoryContainer>
    </>
  );
}

export default Main;
