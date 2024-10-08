const Item = ({ name, quantity, category }) => {
    return (
      <li className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md mb-2">
        <div className="text-lg font-semibold text-gray-800">{name}</div>
        <div className="text-sm text-gray-500">Quantity: {quantity}</div>
        <div className="text-sm text-blue-500">Category: {category}</div>
      </li>
    );
  };