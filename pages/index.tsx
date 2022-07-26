import * as React from "react";
import Head from "next/head";

import { About } from "../components/About";
import { Checklist } from "../components/Checklist";
import { ViewContextProvider } from "../context/ViewContext";

import styles from "../styles/Home.module.css";

const Home: React.FC = () => (
  <div className={styles.container}>
    <Head>
      <title>Pikmin Bloom Decor Checklist</title>
      <meta
        name="description"
        content="A checklist to help you keep track of which type of Decor Pikmin you have collected in the Pikmin Bloom game."
      />

      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="theme-color" content="#27cb2e" />

      <link rel="manifest" href="/app.webmanifest" />
    </Head>

    <main>
      <h1>Pikmin Bloom Decor Checklist</h1>
      <ViewContextProvider>
        <Checklist />
      </ViewContextProvider>
    </main>

    <About />
  </div>
);

export default Home;
