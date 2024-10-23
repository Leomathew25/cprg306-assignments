'use client';

import { useState } from "react";

export default function Page() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="flex justify-center items-center">
            <div className="bg-white flex items-center justify-center space-x-4 p-3 shadow-lg mt-2">
                <span className="text-l pr-10 text-black">{quantity}</span>
                <button 
                    onClick={decrement} 
                    className={`w-7 h-5 flex items-center justify-center rounded-sm text-white font-bold 
                    ${quantity === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-400 hover:bg-gray-600'}`}
                    disabled={quantity === 1}
                >
                    -
                </button>
                
                <button 
                    onClick={increment} 
                    className={`w-7 h-5 flex items-center justify-center rounded-sm text-white font-bold 
                    ${quantity === 20 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-400'}`}
                    disabled={quantity === 20}
                >
                    +
                </button>
            </div>
        </div>
    );
}