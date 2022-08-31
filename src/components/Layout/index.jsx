import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.childern}
      <Footer />
    </>
  );
};

export default Layout;
