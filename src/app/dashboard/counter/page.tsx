"use client";

import { Metadata } from "next";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Counter Page",
//   description: "Un Simple Contador",
// };

export default function CounterPage() {
  const [counter, setCounter] = useState(10);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <span className="text-9xl">{counter}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounter((prevState) => prevState + 1)}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounter((prevState) => prevState - 1)}
        >
          -1
        </button>
      </div>
    </div>
  );
}
