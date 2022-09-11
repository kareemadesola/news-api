import React from "react";
import { useFetch } from "./useFetch";

const TECH_URL = `https://newsapi.org/v2/everything?q=tech&apiKey=${process.env.REACT_APP_SECRET_KEY}`;
const Tech = () => {
  const { loading, news } = useFetch(TECH_URL);
  return loading ? (
    <div>Loading</div>
  ) : (
    news?.articles?.map((article) => {
      return <p> {article.author}</p>;
    })
  );
};

export default Tech;
