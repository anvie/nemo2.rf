import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.sass";
import Navbar from "../components/Navbar";
import { FC } from "react";
import imageLoader from "../imageLoader";

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} pt-16 md:pt-0`}>
      <Head>
        <title>$name$</title>
        <meta name="description" content="$param.description$" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={`${styles.main} home`}>
        <p>$param.description$</p>
      </main>

      <footer className={styles.footer}>
        <div className="flex flex-col place-items-center items-center justify-center pt-10">
          <Image
            src="$name_kebab_case$-logo.png"
            alt="$name$ Logo"
            width={300}
            height={300}
            loader={imageLoader}
          />
          <div className="pt-10 pb-10 text-center">
            Copyright &copy; $year$ $name$. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

