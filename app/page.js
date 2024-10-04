'use client'

import { useState } from "react"

export default function Home() {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(expression).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult("");
      setExpression("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6">
      <h1 className="text-4xl font-bold text-white mb-10">Osama Calculator</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <div className="bg-gray-100 text-right text-3xl p-4 rounded-lg mb-4">
          {expression || "0"}
        </div>
        <div className="bg-gray-100 text-right text-2xl p-4 rounded-lg mb-4 text-blue-800">
          {result}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => handleButtonClick(button)}
              className="bg-blue-500 text-white text-2xl p-4 rounded-lg shadow hover:bg-blue-600 transition-all"
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
