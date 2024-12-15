import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1); 

  
  const increment = () => setCount(count + inputValue);
  const decrement = () => setCount(count - inputValue);
  const reset = () => setCount(0);

  
  const handleInputChange = (e) => {
    const value = Math.max(1, Number(e.target.value)); 
    setInputValue(value);
  };

  return (
    <div className="App">
      <h1>React Counter App</h1>
      <div className="counter-container">
        <h2>{count}</h2>
        <div className="button-container">
          <button onClick={increment} className="btn increment">Increment by {inputValue}</button>
          <button onClick={decrement} className="btn decrement">Decrement by {inputValue}</button>
          <button onClick={reset} className="btn reset">Reset</button>
        </div>
        <div className="input-container">
          <label>
            Set increment/decrement value:
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              min="1"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
