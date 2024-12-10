import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userID) {
  const items = [];
  const itemsRef = collection(db, "users", userID, "items");
  const q = query(itemsRef);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push(doc.data());
  });
  return items;
}

export async function addItem(userID, item) {
  const itemsRef = collection(db, "users", userID, "items");
  const docRed = await addDoc(itemsRef, item);
  return docRed.id;
}