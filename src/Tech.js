import React from "react";
import { useFetch } from "./useFetch";
import Loading from "./Loading";
import Page from "./Page";

const TECH_URL = `${process.env.REACT_APP_BASE_URL}?category=technology&language=en&apiKey=${process.env.REACT_APP_SECRET_KEY}`;
const Tech = () => {
  const { loading, news } = useFetch(TECH_URL);
  return loading ? <Loading /> : <Page news={news} />;
};

export default Tech;
