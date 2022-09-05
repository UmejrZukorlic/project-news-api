import React, { useContext } from "react";
import "./headline.css";
import Layout from "../Layout";
import API from "../../api/data.js";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NewsContext } from "../context";
const Headline = (props) => {
  const contextUse = useContext(NewsContext);

  const [data, setData] = useState([]);

  // console.log(contextUse);

  const fetchdata = API();
  useEffect(() => {
    if (fetchdata) {
      setData(fetchdata.articles);
      // console.log(data);
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

              <Link
                className="link"
                onClick={() => {
                  contextUse.setSentNews(item);
                }}
                to="/articles">
                <button>Read More</button>
              </Link>
            </div>
          );
        })}
        <button
          onClick={() => {
            contextUse.setPage(contextUse.page + 20);
          }}>
          Load More
        </button>
      </div>
    </Layout>
  );
};

export default Headline;
