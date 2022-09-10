import React from "react";
import { useFetch } from "./useFetch";

const home_url =
  "https://newsapi.org/v2/top-headlines?country=ng&apiKey=22b6925047bd45039f93b7ee85ccb6f0";
const Home = () => {
  const { news } = useFetch(home_url);
  console.log(news);

  news.articles.map((article) => {
    return <p> {article.title}</p>;
  });
};

export default Home;
