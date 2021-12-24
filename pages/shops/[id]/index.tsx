import { NextPage } from 'next';
import { useRouter } from 'next/router';
import SearchShop from "../../../components/SearchShop";

const shops: NextPage = () => {
  const router = useRouter();
  const {id} = router.query;

  return (
    <>
      <SearchShop prevsearch={id} />
      <h3>
        Search results for <span style={{ color: "#4b5cdb" }}>{id}</span>:
      </h3>
    </>
  );
};

export default shops;
