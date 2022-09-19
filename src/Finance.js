import React from "react";
import { useFetch } from "./useFetch";
import Loading from "./Loading";
import Page from "./Page";

const FINANCE_URL = `https://newsapi.org/v2/everything?q=finance&apiKey=${process.env.REACT_APP_SECRET_KEY}`;
const Finance = () => {
  const { loading, news } = useFetch(FINANCE_URL);
  return loading ? <Loading /> : <Page news={news} />;
};

export default Finance;
