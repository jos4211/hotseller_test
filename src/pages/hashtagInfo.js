import React, { useState, useEffect } from "react";
import CategoryBox from "../component/catagoryBox";
import CategoryData from "../component/categoryData";
import CategoryBtn from "../component/categoryBtn";
import * as tagData from "../lib/api/getData";
import addComma from "../utility/addComma";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

/*
  태그의 상세내용이 나오는 페이지
*/

// 없는 데이터를 불었을때 보여줄 text 박스
const ErrorText = styled.div`
  margin-top: 100px;
  text-align: center;
  padding-bottom: 100px;

  span {
    color: red;
  }
`;

const TagContainer = styled.div`
  margin-top: 100px;
  text-align: center;
  padding-bottom: 100px;
`;

const CategoryContainer = styled.div`
  position: relative;
  margin-top: 170px;
  text-align: center;
  height: auto;
`;

function HashtagInfo({ match, history }) {
  // 데이터 state
  const [data, setData] = useState(null);

  // 데이터를 받아올때 데이터가 들어있는지 없는지 확인해주는 state
  const [errorPage, setErrorPage] = useState(false);

  // 게시물 카테고리버튼 state
  const [postActiveBtn, setPostActiveBtn] = useState("lately_popular");

  // 아이디 날짜 순 카테고리버튼 state
  const [idActiveBtn, setIdActiveBtn] = useState("top_id_7");

  // 게시물 카테고리 버튼에 들어갈 기본 설정 테이터
  const postBtnData = [
    { btnText: "최근 인기 순위", btnName: "lately_popular" },
    {
      btnText: "오래 유지된 순위",
      btnName: "top_remain",
    },
    { btnText: "좋아요 많이 받은 순위", btnName: "top_like" },
    { btnText: "댓글 많이 달린 순위", btnName: "top_comment" },
  ];

  // 아디이 카테고리 버튼에 들어갈 기본 설정 테이터
  const idBtnData = [
    {
      btnText: "최근 7일",
      btnName: "top_id_7",
    },
    { btnText: "최근 30일", btnName: "top_id_30" },
    { btnText: "최근 90일", btnName: "top_id_90" },
    { btnText: "최근 180일", btnName: "top_id_180" },
  ];

  useEffect(async () => {
    setErrorPage(false);
    const tagName = match.params.name;

    const resultData = await tagData.infoData(tagName);

    if (!resultData) {
      setErrorPage(true);
    } else {
      setData(resultData);
    }
  }, [match]);

  const backBtn = () => {
    history.goBack();
  };

  // 게시물 카테고리 버튼 선택시
  const onClickPostBtn = (e) => {
    // 클릭한 카테고리 버튼 name으로 activeBtn state를 변경해 클릭한 버튼을 알린다.
    setPostActiveBtn(e.target.name);
  };

  // 아이디 카테고리 버튼 선택시
  const onClickidBtn = (e) => {
    setIdActiveBtn(e.target.name);
  };

  return (
    <>
      <h1>info</h1>
      <h2>
        <Link to="/">to main</Link>
      </h2>
      {errorPage ? (
        <ErrorText>
          <h1>
            <span>#{match.params.name}</span> 태그의 데이터가 존재하지 않습니다.
          </h1>
          <h3>
            <Button variant="outline-secondary" onClick={backBtn}>
              돌아가기
            </Button>
          </h3>
        </ErrorText>
      ) : (
        data !== null && (
          <TagContainer>
            <h2>#{data.info.hashtag}</h2>
            <h5>포스팅 수 : {addComma(data.info.post_cnt)}</h5>

            <CategoryContainer>
              <h3>#{data.info.hashtag} 와 관련 있는 태그 순위</h3>
              <CategoryBox>
                <CategoryData data={data.top_relation} category="relevance" />
              </CategoryBox>
            </CategoryContainer>

            <CategoryContainer>
              <h3>#{data.info.hashtag} 포함된 태그 중 관련도 순위</h3>
              <CategoryBox>
                <CategoryData
                  data={data.top_autocomplete}
                  category="relevance"
                />
              </CategoryBox>
            </CategoryContainer>

            <CategoryContainer>
              <h3>#{data.info.hashtag} 포함된 게시물 목록</h3>
              <CategoryBox>
                <CategoryBtn
                  btnData={postBtnData}
                  activeBtn={postActiveBtn}
                  onClickBtn={onClickPostBtn}
                />
                <CategoryData data={data} day={postActiveBtn} category="post" />
              </CategoryBox>
            </CategoryContainer>

            <CategoryContainer>
              <h3>#{data.info.hashtag} 에서 가장 활동 많이 한 아이디 순위</h3>

              <CategoryBox>
                <CategoryBtn
                  btnData={idBtnData}
                  activeBtn={idActiveBtn}
                  onClickBtn={onClickidBtn}
                />
                <CategoryData data={data} day={idActiveBtn} category="topId" />
              </CategoryBox>
            </CategoryContainer>

            <CategoryContainer>
              <h3>#{data.info.hashtag} 최근 1년간 포스팅 수 추이</h3>
              <CategoryBox>
                <CategoryData data={data.post_log} category="postLog" />
              </CategoryBox>
            </CategoryContainer>
          </TagContainer>
        )
      )}
    </>
  );
}

export default HashtagInfo;
