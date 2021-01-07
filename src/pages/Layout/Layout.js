import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div id="wrapper">
      <Menu />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header title={props.title || "Página"} />

          <div className="container-fluid">{props.children}</div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
