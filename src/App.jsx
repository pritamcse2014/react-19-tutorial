import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>React 19 Tutorial</h1>
      <h2>Counter : {counter}</h2>
      <button style={{ marginRight: 5 }} onClick={() => setCounter(counter+1)}>Increment</button>
      <button style={{ marginLeft: 5 }} onClick={() => setCounter(counter-1)}>Decrement</button>
    </div>
  );
};

export default App;