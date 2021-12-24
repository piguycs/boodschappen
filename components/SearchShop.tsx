import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import shopStyles from "../styles/Shop.module.css";
import { useState } from "react";

const SearchShop = ({prevsearch}:{prevsearch:any}) => {
  const [searchTerm, setST] = useState(prevsearch);

  return (
    <div>
      <Head>
        <title>Find a store | appointments</title>
        <meta
          name="keywords"
          content="appointments, netherlands, open, covid"
        />
      </Head>
      <h1 style={{ fontSize: 45 }}>Which store would you like to visit?</h1>
      <div className={shopStyles.search}>
        <input
          className={shopStyles.searchTerm}
          type="text"
          placeholder="Go to a shop"
          value={searchTerm}
          onChange={(e) => setST(e.target.value)}
        />
        {searchTerm ? (
          <Link href={`/shops/${searchTerm}`}>
            <button className={shopStyles.searchBTN}>Shop</button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default SearchShop;
