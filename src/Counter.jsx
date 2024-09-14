import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button data-testid="counter-button">{count}</button>
    </div>
  );
}

export default Counter;
