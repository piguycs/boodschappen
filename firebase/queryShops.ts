import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const db = getFirestore();

const storesRef = collection(db, "stores");



export async function querySearch(key:string, term:string) {
  const q = query(storesRef, where(key, "==", term));
  const querySnapshot = await getDocs(q)
  var results: any[] = []
  querySnapshot.forEach((doc) => {
    results.push(doc.data())
  });

  if (results.length != 0) {
    return results
  } else return -1

}


