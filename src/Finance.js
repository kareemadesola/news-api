import React from "react";
import { useFetch } from "./useFetch";

const FINANCE_URL = `https://newsapi.org/v2/everything?q=finance&apiKey=${process.env.REACT_APP_SECRET_KEY}`;
const Finance = () => {
  const { loading, news } = useFetch(FINANCE_URL);
  return loading ? (
    <div>Loading</div>
  ) : (
    news?.articles?.map((article) => {
      return <p> {article.author}</p>;
    })
  );
};

export default Finance;
