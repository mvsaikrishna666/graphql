import { useState } from "react";
import "./App.css";
import Home from "./components/home";
import Dash from "./components/dashboard";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Click
      </button>
      <Home />
      {show && <Dash />}
    </div>
  );
}

export default App;
