function Item({ name, quantity, category, handleIngredient }) {
    const text = name
      .split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/)[0]
      .split(",")[0]
      .trim();
    return (
      <ul className="bg-sky-200 w-[80%] py-3 px-5 rounded">
        <li onClick={() => handleIngredient(text)}>
          <h4 className="text-xl font-bold">{name}</h4>
          <p>
            Buy {quantity} in {category}
          </p>
        </li>
      </ul>
    );
  }
  
  export default Item;