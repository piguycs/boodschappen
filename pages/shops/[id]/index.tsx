import { NextPage } from "next";
import { useRouter } from "next/router";
import SearchShop from "../../../components/SearchShop";
import Card from "../../../components/Card";

function Shops() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <SearchShop />
      <h3>
        Search results for <span style={{ color: "#3cab54" }}>{id}</span>:
      </h3>
      <Card />
    </>
  );
};

export default Shops;
