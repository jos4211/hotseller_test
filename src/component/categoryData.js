import React, { useState, useEffect } from "react";
import CategoryItem from "./categoryItem";
import styled from "styled-components";

// 해당 카테고리 데이터를 뽑아서 배치하는 곳

const ItemBox = styled.div`
  text-align: center;
  margin-top: 30px;
`;

// data: json데이터
// day: main에서 활성화 된 카테고리 버튼 값 (main에 활성화 된 카테고리 버튼에 알맞게 데이터를 넣기 위해 사용)
function CategoryData({ data, day, category }) {
  const [item, setItem] = useState(null);

  const getData = async () => {
    if (day === undefined) {
      setItem(
        // 데이터가 없는 테그면 데이터가 없음을 알린다.
        data.length === 0 ? (
          <h2>해당 데이터가 없습니다.</h2>
        ) : (
          data.map((value, index) => {
            return (
              <CategoryItem
                number={index + 1}
                key={index}
                value={value}
                category={category}
              />
            );
          })
        )
      );
    } else {
      setItem(
        // 데이터가 없는 테그면 데이터가 없음을 알린다.
        data[day].length === 0 ? (
          <h2>해당 데이터가 없습니다.</h2>
        ) : (
          data[day].map((value, index) => {
            return (
              <CategoryItem
                number={index + 1}
                key={index}
                value={value}
                category={category}
              />
            );
          })
        )
      );
    }
  };

  useEffect(async () => {
    getData();
  }, [data, day]);
  return (
    <>
      <ItemBox>{item}</ItemBox>
    </>
  );
}

export default CategoryData;
