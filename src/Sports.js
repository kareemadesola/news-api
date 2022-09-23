import React from "react";
import { useFetch } from "./useFetch";
import Loading from "./Loading";
import Page from "./Page";

export const SPORT_URL = `${process.env.REACT_APP_BASE_URL}?category=sports&language=en&apiKey=${process.env.REACT_APP_SECRET_KEY}`;
const Sports = () => {
  const { loading, news } = useFetch(SPORT_URL);
  return loading ? <Loading /> : <Page news={news} />;
};

export default Sports;
