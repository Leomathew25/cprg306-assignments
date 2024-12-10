'use client';

import { useState, useEffect } from "react";

function fetchMealIdeas(ingredient) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then((res) => res.json())
        .then((data) => data.meals || []);
}

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    };

    useEffect(() => {
        if (ingredient) loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas for {ingredient}</h2>
            <ul className="grid grid-cols-2 gap-4">
                {meals.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}
                        <img src={meal.strMealThumb} alt={meal.strMeal}  />
                    </li>
                ))}
            </ul>
        </div>
    );

}