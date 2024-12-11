import Meal from "./meal";
function MealsIdea({ meals, ingredient }) {
  return (
    <div>
      <p>Here are some meal ideas using {ingredient}:</p>
      {meals === null ? (
        <p className="font-semibold text-xl">No meals found 🥲</p>
      ) : (
        <ul className="flex-col flex gap-4">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default MealsIdea;