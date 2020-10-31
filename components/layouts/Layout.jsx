import React from "react";
import Head from "next/head";
import { Global, css } from "@emotion/core";

const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --white: #fafafa;
            --gray: #f2f2f2;
            --blue: #3e5aad;
            --orange: #db4a39;
            --violet: #3b3647;
            --terracota: #dc4949;
            --purple1: #6f44e0;
            --purple2: #5635ad;
            --red: #c70808;
            --font: "Roboto", sans-serif;
          }
          html {
            box-sizing: border-box;
            margin: 0;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            margin: 0;
            padding: 0;
            background-color: var(--white);
          }
        `}
      />
      <Head>
        <html lang="en" />
        <title>Mosine</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&family=Roboto:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
