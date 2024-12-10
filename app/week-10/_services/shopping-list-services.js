import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to retrieve all items for a specific user from Firestore
export const getItems = async (userId) => {
  const items = [];
  try {
	const itemsCollection = collection(db, `users/${userId}/items`);
	const itemsSnapshot = await getDocs(itemsCollection);
	itemsSnapshot.forEach((doc) => {
	  items.push({ id: doc.id, ...doc.data() });
	});
  } catch (error) {
	console.error("Error fetching items: ", error);
  }
  return items;
};

// Function to add a new item to a specific user's list of items in Firestore
export const addItem = async (userId, item) => {
  try {
	const itemsCollection = collection(db, `users/${userId}/items`);
	const docRef = await addDoc(itemsCollection, item);
	return docRef.id;
  } catch (error) {
	console.error("Error adding item: ", error);
  }
};