import { useEffect, useState } from "react";

function Meal({ meal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [instruction, setInstruction] = useState("");
  async function fetchRecipe() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal.strMeal}`
    );
    const data = await response.json();
    setInstruction(data.meals[0].strInstructions);
  }
  useEffect(() => {
    if (isOpen) {
      fetchRecipe();
    }
  }, [isOpen]);

  return (
    <li
      className="py-3 px-5 bg-yellow-200 hover:bg-yellow-400"
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3>{meal.strMeal}</h3>
      {isOpen && (
        <div>
          <p className="text-xs">{instruction}</p>
        </div>
      )}
    </li>
  );
}

export default Meal;