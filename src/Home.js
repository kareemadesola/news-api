import React from "react";
import { useFetch } from "./useFetch";
import Loading from "./Loading";
import Page from "./Page";
import Hero from "./Hero";

const HOME_URL = `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${process.env.REACT_APP_SECRET_KEY}`;
const Home = () => {
  const { loading, news } = useFetch(HOME_URL);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Hero />
      <Page news={news} />;
    </>
  );
};

export default Home;
