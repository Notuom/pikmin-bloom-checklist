import * as React from "react";
import Head from "next/head";

import { About } from "../components/About";
import { Checklist } from "../components/Checklist";

import styles from "../styles/Home.module.css";

const Home: React.FC = () => (
  <div className={styles.container}>
    <Head>
      <title>Pikmin Bloom Decor Checklist</title>
      <meta
        name="description"
        content="A checklist to help you keep track of which type of Decor Pikmin you have collected in the Pikmin Bloom game."
      />
      <link rel="icon" href="/favicon.png" />
    </Head>

    <main>
      <h1>Pikmin Bloom Decor Checklist</h1>
      <Checklist />
    </main>

    <About />
  </div>
);

export default Home;
