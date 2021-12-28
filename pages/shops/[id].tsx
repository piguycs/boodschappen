import { useRouter } from "next/router";
import SearchShop from "../../components/SearchShop";
import { querySearch } from "../../firebase/queryShops";

function List({ list }: any) {
  return (
    <>
      {list.map((item: any) => (
        <a
          style={{ color: "blue"}}
          href="/"
          key={item.name}
        >
          shop: {item.name}, city: {item.city}
        </a>
      ))}
    </>
  );
}

function Shops({ results }: any) {
  const router = useRouter();
  const { id } = router.query;
  console.log(results);
  return (
    <>
      <SearchShop />
      <h3>
        Search results for <span style={{ color: "#3cab54" }}>{id}</span>:
      </h3>
      {results != -1 ? (
        <List list={results} />
      ) : (
        "your search terms were invalid"
      )}
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const results = await querySearch("name", context.params.id);

  return {
    props: {
      results,
    },
  };
};

export default Shops;
