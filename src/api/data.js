import axios from "axios";
import { useEffect, useState } from "react";

function API() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=a22fa5a2568848678974cd1c5ae26680"
      )
      .then((r) => {
        setData(r.data);
      });
  }, []);

  return data;
}

export default API;
