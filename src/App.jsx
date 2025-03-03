import React from 'react';

const App = () => {
  const userName = "Pritam Kumar Kundu";
  let x = 20;
  let y = 30;
  return (
    <div>
      <h2>JSX in React JS</h2>
      <h2>{userName}</h2>
      <h2>{10+20+30}</h2>
      <h2>{x * y}</h2>
      <button onClick={() => alert('Hello')}>Click</button>
    </div>
  );
};

export default App;