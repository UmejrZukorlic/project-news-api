import React, { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const NewsContext = createContext();
export { NewsContext };
const Context = (props) => {
  const [sentNews, setSentNews] = useState();
  const [page, setPage] = useState(20);
  const [firstParameter, setFirstParameter] = useState("top-headlines");
  const [secondParameter, setSecondParameter] = useState("country=us");
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/${firstParameter}?${secondParameter}&pageSize=${page}&apiKey=a22fa5a2568848678974cd1c5ae26680`
      )
      .then((r) => {
        setData(r.data);
      });
  }, [firstParameter, secondParameter, page]);

  return (
    <NewsContext.Provider
      value={{
        sentNews,
        setSentNews,
        page,
        setPage,
        firstParameter,
        setFirstParameter,
        secondParameter,
        setSecondParameter,
        data,
        setData,
      }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export default Context;
