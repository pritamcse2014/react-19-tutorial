import React from 'react';

const App = () => {
  return (
    <div>
      <h2>First Component</h2>
      <Fruit/>
      <Colors/>
      <Sum/>
    </div>
  );
};

const Fruit = () => {
  return (
    <div>
      <h2>Apple</h2>
    </div>
  );
};

const Colors = () => {
  return (
    <div>
      <h2>Red</h2>
    </div>
  );
};

const Sum = () => {
  return (
    15 + 10
  );
};

export default App;