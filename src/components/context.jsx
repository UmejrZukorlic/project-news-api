import React, { createContext } from "react";
import { useState } from "react";

const NewsContext = createContext();
export { NewsContext };
const Context = (props) => {
  const [sentNews, setSentNews] = useState();
  const [page, setPage] = useState(20);
  return (
    <NewsContext.Provider
      value={{
        sentNews,
        setSentNews,
        page,
        setPage,
      }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export default Context;
