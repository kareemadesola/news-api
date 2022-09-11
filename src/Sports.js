import React from "react";
import { useFetch } from "./useFetch";

export const SPORT_URL = `https://newsapi.org/v2/everything?q=sport&apiKey=${process.env.REACT_APP_SECRET_KEY}`;
const Sports = () => {
  const { loading, news } = useFetch(SPORT_URL);
  return loading ? (
    <div>Loading</div>
  ) : (
    news?.articles?.map((article) => {
      return <p> {article.author}</p>;
    })
  );
};

export default Sports;
