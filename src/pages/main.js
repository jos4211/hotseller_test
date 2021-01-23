import React, { useState, useEffect } from "react";
import * as tagData from "../lib/api/getData";
import TrendContainer from "../component/mainTrendContainer";
import MainDayBtn from "../component/mainDayBtn";
import styled from "styled-components";

const CategoryBox = styled.div`
  text-align: center;
`;

function Main() {
  const [trendData, setTrendData] = useState(tagData.trendData);

  const [day, setDay] = useState({
    gap: "day1_gap",
    rate: "day1_rate",
  });

  useEffect(async () => {
    const getTrendData = await tagData.trendData;

    setTrendData(getTrendData);
  }, []);

  // gap day버튼 클릭시
  const onGapDayBtn = (e) => {
    console.log("gap", e.target.name);
    setDay((state) => {
      return { ...state, gap: e.target.name };
    });
  };

  // rate day버튼 클릭시
  const onRateDayBtn = (e) => {
    console.log("rate", e.target.name);
    setDay((state) => {
      return { ...state, rate: e.target.name };
    });
  };

  return (
    <>
      <CategoryBox>
        <h2>포스팅 증가량 순위</h2>
        <MainDayBtn
          isDay={day.gap}
          day1="day1_gap"
          day7="day7_gap"
          day30="day30_gap"
          onDayBtn={onGapDayBtn}
        />
        <TrendContainer data={trendData} day={day.gap} />
      </CategoryBox>

      <CategoryBox>
        <h2>포스팅 증가율 순위</h2>
        <MainDayBtn
          isDay={day.rate}
          day1="day1_rate"
          day7="day7_rate"
          day30="day30_rate"
          onDayBtn={onRateDayBtn}
        />
        <TrendContainer data={trendData} day={day.rate} />
      </CategoryBox>

      <CategoryBox>
        <h2>새롭게 분석 대상이 된 해시태그</h2>
        <TrendContainer type="recent" data={trendData} day="recent_list" />
      </CategoryBox>
    </>
  );
}

export default Main;
