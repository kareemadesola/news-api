import React from "react";
import { useFetch } from "./useFetch";

const HOME_URL = `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${process.env.REACT_APP_SECRET_KEY}`;
const Home = () => {
  const { loading, news } = useFetch(HOME_URL);
  console.log(news);

  return loading ? (
    <div>Loading</div>
  ) : (
    news?.articles?.map((article) => {
      return <p> {article.author}</p>;
    })
  );
};

export default Home;
