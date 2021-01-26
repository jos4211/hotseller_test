import React, { useState, useEffect } from "react";
import styled from "styled-components";
import addComma from "../utility/addComma";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

// 뽑아놓은 카테고리 데이터로 정리해서 보여주는 곳

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

    // 버튼에 마우스를 갖다대면 데이터의 정보를 띄워준다.
    .tagContent {
      display: inline-block;
      width: 200px;
      height: auto;
    }
  }
  &:focus {
    border: none;
    background-color: rgb(222, 222, 231) !important;
  }

  .tagContent {
    padding-top: 10px;
    display: none;
    position: relative;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
  }
`;

const TagName = styled.p`
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 170px;
  overflow: hidden;
`;

// value : json에서 뽑아 map을 돌린 데이터
// number : json에서 뽑아 map을 돌릴때 나온 값 (순위)
// category : 데이터의 구조가 많이 다른 카테고리를 구분 해주는 값 ( 데이터를 좀 더 효율적으로 뿌리기 위해 사용)

function MainTrendItem({ value, number, category }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(() => {
      // TOP 포스팅 순위
      if (category === "topPostCnt") {
        console.log("value", value);
        return (
          <Link to={"/" + value.hashtag}>
            <ItemBox>
              <TagName>
                #{number}. {value.hashtag}
              </TagName>
              <div className="tagContent">
                <p>태그 이름 : {value.hashtag}</p>
                <p>포스팅 수 : {addComma(value.post_cnt)}개</p>
              </div>
            </ItemBox>
          </Link>
        );

        // 포스팅 증가량,증가율 순위
      } else if (category === "posting") {
        return (
          <Link to={"/" + value.hashtag}>
            <ItemBox>
              <TagName>
                #{number}. {value.hashtag}
              </TagName>
              <div className="tagContent">
                <p>태그 이름 : {value.hashtag}</p>
                <p>포스팅 수 : {addComma(value.post_cnt)}개</p>
                <p>최근 증가량 : {value.post_gap}개</p>
                <p>최근 증가율 : {value.post_rate}%</p>
                <p>게시물 수 : {addComma(value.post_cnt)}개</p>
              </div>
            </ItemBox>
          </Link>
        );

        // 새롭게 분석대상이 된 해시태그
      } else if (category === "recent") {
        return (
          <Link to={"/" + value.hashtag}>
            <ItemBox>
              <TagName>{value.hashtag}</TagName>
              <div className="tagContent">
                <p>태그 이름 : {value.hashtag}</p>
                <p>포스팅 수 : {addComma(value.post_cnt)}개</p>
                <p>발견 날짜 : {value.add_date}</p>
                <p>분석 시작 시간 : {value.check_start_time}</p>
                <p>게시물 수 : {addComma(value.post_cnt)}개</p>
              </div>
            </ItemBox>
          </Link>
        );

        // 관련 태그 , 관련도 순위
      } else if (category === "relevance") {
        return (
          <Link to={"/" + value.hashtag}>
            <ItemBox>
              <TagName>
                #{number}. {value.hashtag}
              </TagName>
              <div className="tagContent">
                <p>태그 이름 : {value.hashtag}</p>
                <p>포스팅 수 : {addComma(value.post_cnt)}개</p>
              </div>
            </ItemBox>
          </Link>
        );

        // 활동 많이 한 아이디 순위
      } else if (category === "topId") {
        return (
          <ItemBox>
            <TagName>
              #{number}. {value.username}
            </TagName>
            <div className="tagContent">
              <p>아이디 : {value.username}</p>
              <p>점수 : {addComma(value.score)}점</p>
              <p>팔로워 수 : {addComma(value.follower_cnt)}명</p>
              <p>팔로우 수 : {addComma(value.follow_cnt)}명</p>
              <p>포스팅 수 : {addComma(value.post_cnt)}개</p>
              <p>평균 좋아요 : {addComma(value.average_like_cnt)}개</p>
            </div>
          </ItemBox>
        );

        // 최근 1년간 포스팅 수 추이
      } else if (category === "postLog") {
        return (
          <ItemBox>
            <TagName>{value.check_date}</TagName>
            <div className="tagContent">
              <p>날짜 : {value.check_date}</p>
              <p>포스팅 수 : {addComma(value.post_cnt)}개</p>
            </div>
          </ItemBox>
        );

        // 최근 인기, 오래 유지, 좋아요, 댓글 게시물 순위
      } else if (category === "post") {
        return (
          <ItemBox>
            <TagName>{value.url}</TagName>
            <div className="tagContent">
              <p>url : {value.url}</p>
              <p>좋아요 수 : {addComma(value.like_cnt)}개</p>
              <p>댓글 수 : {addComma(value.comment_cnt)}개</p>
              <p>영상 수 : {addComma(value.mov_cnt)}개</p>
              <p>사진 수 : {addComma(value.pic_cnt)}개</p>
              <p>포스팅 시간 : {value.post_time}</p>
              <p>사진 수 : {addComma(value.pic_cnt)}개</p>
            </div>
          </ItemBox>
        );
      }
    });
  }, [value]);

  return <>{state}</>;
}

export default MainTrendItem;
