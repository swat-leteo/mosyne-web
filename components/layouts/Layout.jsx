import React from "react";

const Layout = (props) => {
  return (
    <>
      <h1>header</h1>
      <main>{props.children}</main>
      <h1>footer</h1>
    </>
  );
};

export default Layout;
