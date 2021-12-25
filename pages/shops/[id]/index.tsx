import { NextPage } from "next";
import { useRouter } from "next/router";
import SearchShop from "../../../components/SearchShop";
import Card from "../../../components/Card";

const shops: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <SearchShop prevsearch={id} />
      <h3>
        Search results for <span style={{ color: "#3cab54" }}>{id}</span>:
      </h3>
      <Card />
    </>
  );
};

export default shops;
