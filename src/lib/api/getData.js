import getTrendTag from "../hotseller-dataset/pretty/hashtag_trend";
import getTopHashtag from "../hotseller-dataset/pretty/top_hashtag";

// main trend 데이터
export const trendData = getTrendTag;

// main topHashtag 데이터
export const topHashtagData = getTopHashtag;

// hashtagInfo 데이터
export const infoData = async (tagName) => {
  try {
    const res = await import(
      `../hotseller-dataset/pretty/hashtag_info/${tagName}`
    );

    return res;
  } catch (e) {
    return null;
  }
};
