import React, { useState, useEffect } from "react";
import MainTrendItem from "./mainTrendItem";
import styled from "styled-components";

const ItemBox = styled.div`
  text-align: center;
  margin-bottom: 100px;
`;

function TrendContainer({ data, day }) {
  const [trendItem, setTrendItem] = useState(null);

  const getData = async () => {
    if (day === "recent_list") {
      setTrendItem(
        data.recent_list.map((value, index) => {
          return (
            <MainTrendItem
              number={index + 1}
              key={index}
              date={value.add_date}
              hashtag={value.hashtag}
              postCnt={value.post_cnt}
              checkStartTime={value.check_start_time}
            />
          );
        })
      );
    } else {
      setTrendItem(
        data[day].map((value, index) => {
          return (
            <MainTrendItem
              number={index + 1}
              key={index}
              hashtag={value.hashtag}
              postGap={value.post_gap}
              postRate={value.post_rate}
              postCnt={value.post_cnt}
            />
          );
        })
      );
    }
  };

  useEffect(async () => {
    getData();
  }, [day]);
  return (
    <>
      <ItemBox>{trendItem}</ItemBox>
    </>
  );
}

export default TrendContainer;
