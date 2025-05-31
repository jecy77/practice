import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import Body from "./components/Body";
import Together from "./components/Together";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Home />
        <Body />
        <Together />
      </div>
    </>
  );
}

export default App;
