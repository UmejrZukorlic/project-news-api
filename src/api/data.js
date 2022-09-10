import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { NewsContext } from "../components/context";

function API() {
  const [data, setData] = useState();
  const { page, setPage, firstParameter, setFirstParameter } =
    useContext(NewsContext);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/${firstParameter}?country=us&pageSize=${page}&apiKey=a22fa5a2568848678974cd1c5ae26680`
      )
      .then((r) => {
        setData(r.data);
      });
  }, [page]);

  return data;
}

export default API;
