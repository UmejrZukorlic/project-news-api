import React from "react";
import Layout from "../Layout";
import API from "../../api/data.js";
import { useState } from "react";
import { useEffect } from "react";
const Headline = (props) => {
  const [data, setData] = useState([]);
  console.log(API());
  const fetchdata = API();
  useEffect(() => {
    if (fetchdata) {
      setData(fetchdata.articles);
      console.log(data);
    }
  }, []);

  return (
    <Layout>
      {data.map((item) => {
        return (
          <div>
            <h3>{item.source.name}</h3>
            <p>{item.title}</p>
            <img src={item.urlToImage} alt="" />
          </div>
        );
      })}
    </Layout>
  );
};

export default Headline;
