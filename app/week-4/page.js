import { useState } from "react";

export default function QuantitySelector() {
 
  const [quantity, setQuantity] = useState(1);

  
  const increment = () => {
    setQuantity((prevQuantity) => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity));
  };

  
  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

  return (
    <div className="flex items-center space-x-4 p-4 border rounded-md bg-white shadow-md w-64">
      <DecrementButton decrement={decrement} isDisabled={quantity === 1} />
      <QuantityDisplay quantity={quantity} />
      <IncrementButton increment={increment} isDisabled={quantity === 20} />
    </div>
  );
}