import React, { useState, useEffect } from "react";
import * as tagData from "../lib/api/getData";
import styled from "styled-components";

function HashtagInfo({ match }) {
  const [data, setData] = useState();

  console.log("name!!!!!!!!!!", match.params.name);

  const tagName = match.params.name;

  useEffect(() => {
    const res = import(
      `../lib/hotseller-dataset/pretty/hashtag_info/${tagName}`
    );
    console.log("res!!!!!!!!!!", res);
    setData(res);
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}

export default HashtagInfo;
