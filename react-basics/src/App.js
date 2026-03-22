import PropsDemo from "./PropsDemo";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <PropsDemo name="Suhani" />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Counter: {count}</h1>

        <button onClick={() => setCount(count + 1)}>Increase</button>

        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
