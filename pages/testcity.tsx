import { querySearch } from "../firebase/queryShops"

export default function() {

  return (
    <div>
      <button onClick={async () => console.log(await querySearch("city", "amstelveen"))}>Query Action</button>
    </div>
  )

}