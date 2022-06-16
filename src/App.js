import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(40);
  const handleIncrement = () =>{
    setCount(count + 1);
  }
  const handleDecrement = () =>{
    setCount1(count1 - 1);
  }
  useEffect(() => {
    console.log("UseEffect is called");
  },[count])
  return (
    <div className="App">
      <h2>Count Up: {count} </h2>
      <button onClick={handleIncrement} >Increment </button>
      <h2>Count Down: {count1} </h2>
      <button onClick={handleDecrement} >Decrement </button>
    </div>
  );
}

export default App;
