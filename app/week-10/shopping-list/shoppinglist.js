import Button from "./button";
import ItemList from "./item-list";

function ShoppingList({ shoppingItems, handleSort, handleIngredient }) {
  return (
    <main className="bg-stone-50 text-stone-900">
      <div className="ml-5 mt-5 flex gap-5 items-center pt-3">
        <span>Sort By:</span>
        <Button handleClick={() => handleSort("name")}>Name</Button>
        <Button handleClick={() => handleSort("category")}>Category</Button>
      </div>
      <ItemList items={shoppingItems} handleIngredient={handleIngredient} />
    </main>
  );
}

export default ShoppingList;