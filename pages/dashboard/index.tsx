import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.sass";
import Navbar from "../../components/Navbar";
import React, { useCallback, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { useRouter } from "next/router";
import fw from "../../lib/FetchWrapper";
import { userAccess } from "../../lib/UserAccess";


const Home: NextPage = () => {
  const router = useRouter();

  const [currentAccount, setCurrentAccount] = useState<string | null>(null);
  const [errorInfo, setErrorInfo] = useState<string | null>(null);
  const [networkSupported, setNetworkSupported] = useState(true);
  const [noMetamask, setNoMetamask] = useState(false);
  const [page, setPage] = useState(0);

  const links = [
    { href: "/dashboard#tab1", label: "Tab 1" },
    { href: "/dashboard#tab2", label: "Tab 2" },
  ];

  useEffect(() => {
    if (currentAccount) {
      const path = router.asPath.trim();
      console.log(path);
      if (path.match(/#tab1$/gi)) {
        setPage(0);
      }
      if (path.match(/#tab2$/gi)) {
        setPage(1);
      }
    }
  }, [router, currentAccount]);

  return (
    <div className={`${styles.container} pt-16 md:pt-0`}>
      <Head>
        <title>$name$</title>
        <meta
          name="description"
          content="$param.description$"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="blur-dot-yellow" />

      <Navbar links={links} />

      <div id="modal-root"></div>

      <main className={`${styles.main} flex flex-col w-full items-center`}>

        {errorInfo && (
          <div className="p-5 bg-red-500 rounded-xl mb-10">
            ERROR: {errorInfo}
          </div>
        )}

        {page == 0 && currentAccount && (<h2>Tab 1</h2>)}
        {page == 1 && currentAccount && (<h2>Tab 2</h2>)}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
