import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


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
      <button onClick={update}>increase</button>
      <button onClick={decrement}>decrease</button>
      count:{count}
    <nav>
       <Navbar /> 


      <Routes>
        <Route path="/backendtest1" element={<Home count={count} />} />
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={"404 not found"}/> 
      </Routes>

      </nav>
      
    </>
  );
}

export default App;
