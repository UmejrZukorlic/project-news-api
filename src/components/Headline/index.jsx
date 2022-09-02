import React from "react";
import "./headline.css";
import Layout from "../Layout";
import API from "../../api/data.js";
import { useState } from "react";
import { useEffect } from "react";
const Headline = (props) => {
  const [data, setData] = useState([]);
  // console.log(API());
  const fetchdata = API();
  useEffect(() => {
    if (fetchdata) {
      setData(fetchdata.articles);
      console.log(data);
    }
  }, [fetchdata]);

  return (
    <Layout>
      <div className="headlineSection">
        {data.map((item, index) => {
          return (
            <div key={index} className="newsCard">
              <img src={item.urlToImage} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>- {item.source.name}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Headline;
