import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Buttons from "./components/Buttons";

function App() {
  const [count, setCount] = useState(0);

  const update = () => { 
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  
  return (
    <>
      <button name="increase" onClick={update}/>
      <button name="decrease" onClick={decrement}/>
      count:{count}
    <nav>
       <Navbar /> 


      <Routes>
        <Route path="/" element={<Home count={count} />} />
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={"404 not found"}/> 
      </Routes>

      </nav>
      
    </>
  );
}

export default App;
