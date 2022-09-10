import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  const getNews = useCallback(async () => {
    const response = await fetch(url);
    const news = await response.json();
    setNews(news);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getNews();
  }, [url, getNews]);
  return { loading, news };
};
