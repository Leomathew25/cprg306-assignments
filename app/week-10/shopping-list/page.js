"use client";
import Form from "./form";
// import itemsJson from "../../week-6/items.json";
import ShoppingList from "./shoppingList";
import { useEffect, useState } from "react";
import MealsIdea from "./meals-idea";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { getItems, addItem } from "../_service/shopping-list-service";

function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [shoppingItems, setShoppingItems] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [meals, setMeals] = useState([]);

  function handleRedirect() {
    router.push("../week-10");
  }

  async function loadItems() {
    const items = await getItems(user.uid);
    setShoppingItems(items);
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  function handleSort(sortAttribute) {
    const sortedItems = [...shoppingItems].sort((a, b) =>
      a[sortAttribute].localeCompare(b[sortAttribute])
    );
    setShoppingItems(sortedItems);
  }

  async function handleAddItem(item) {
    // setShoppingItems([...shoppingItems, item]);
    const id = await addItem(user.uid, item);
    setShoppingItems((prevItems) => [...prevItems, { ...item, id }]);
  }

  function handleIngredient(itemName) {
    setIngredient(itemName);
  }
  async function fetchMealIdeas() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    setMeals(data.meals);
  }

  //fetch data using useEffect
  useEffect(() => {
    fetchMealIdeas();
  }, [ingredient]);

  if (!user) {
    return (
      <div>
        <h2>Not authorized. Go back to the login page</h2>
        <button onClick={handleRedirect}>Go back</button>
      </div>
    );
  }
  return (
    <div className="flex gap-20 ml-5 mb-5 mt-10">
      <div className=" w-1/4">
        <h1 className="text-3xl ml-5 mb-10 font-extrabold text-center ">
          Shopping List for {user.displayName}
        </h1>
        <div className="ml-5">
          <Form handleAddItem={handleAddItem} />
        </div>
        <ShoppingList
          shoppingItems={shoppingItems}
          handleSort={handleSort}
          handleIngredient={handleIngredient}
        />
      </div>

      <div className="w-1/4">
        <h2 className="font-bold text-3xl">Meals Ideas</h2>
        {ingredient ? (
          <div>
            <MealsIdea meals={meals} ingredient={ingredient} />
          </div>
        ) : (
          <p>Select an item to see meal ideas</p>
        )}
      </div>
    </div>
  );
}

export default Page;