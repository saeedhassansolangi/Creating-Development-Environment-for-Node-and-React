import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Increament</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
