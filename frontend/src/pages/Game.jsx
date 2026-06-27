import React, { useState } from "react";
import { rollDice } from "../api/api";

function Game() {

  // 🟡 STEP 5.2 – State (මෙතන තමයි data store වෙන්නේ)
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🎲 API call function
  const handleRoll = async () => {
    setLoading(true);

    try {
      const res = await rollDice({ bet: "big" });

      // backend result save කරන තැන
      setResult(res.data);

    } catch (error) {
      console.log("Error:", error);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Mega SicBo Game</h1>

      {/* Button */}
      <button onClick={handleRoll}>
        {loading ? "Rolling..." : "Roll Dice"}
      </button>

      {/* Result show කරන තැන */}
      {result && (
        <div>
          <h3>Result: {result.outcome}</h3>
          <p>Status: {result.status}</p>
        </div>
      )}
    </div>
  );
}

export default Game;
