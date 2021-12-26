import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import shopStyles from "../styles/Shop.module.css";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const SearchShop = ({ prevsearch }: { prevsearch: any }) => {
  const [searchTerm, setST] = useState(prevsearch ? prevsearch : "");
  const router = useRouter();

  const handleClick = (e:any) => {
    e.preventDefault();
    if (searchTerm !== "") {
      router.push(`/shops/${searchTerm}`);
    }
  };

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
      <form className={shopStyles.search} onSubmit={handleClick}>
        <input
          className={shopStyles.searchTerm}
          type="text"
          placeholder="Go to a shop"
          value={searchTerm}
          onChange={(e) => setST(e.target.value)}
        />
        {searchTerm ? (
          <>
          <Link href={`/shops/${searchTerm}`}>
            <button className={shopStyles.searchBTN}>Shop</button>
          </Link>
          <button className={shopStyles.searchBTN} onClick={(e) => {e.preventDefault()}}>n/c</button>
          </>
        ) : null}
      </form>
    </div>
  );
};

export default SearchShop;
