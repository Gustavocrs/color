import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { Shazam } from "./components/Shazam";
// import { Button } from "./components/Button";

function App() {
  const [color, setColor] = useState();

  const styledBackground = {
    background: color,
  };

  return (
    <div style={styledBackground} className="App">
      <Shazam />
      <Input
        type="text"
        placeholder="enter a color or hex"
        value={color ? color : ""}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}

export default App;
