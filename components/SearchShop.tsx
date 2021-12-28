import Link from "next/link";
import Head from "next/head";
import shopStyles from "../styles/Shop.module.css";
import { useRouter as nextrouter } from "next/router";
import { useState } from "react";

function SearchShop() {
  const [searchTerm, setST] = useState("");
  const router = nextrouter();

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
            <Link href={`/shops/${searchTerm}`} passHref>
              <button className={shopStyles.searchBTN}>Search Shop</button>
            </Link>
            <Link href={`/city/${searchTerm}`}>
              <button
                className={shopStyles.searchBTN}
                >
                Search City
              </button>
            </Link>
          </>
        ) : null}
      </form>
    </div>
  );
};

export default SearchShop;
