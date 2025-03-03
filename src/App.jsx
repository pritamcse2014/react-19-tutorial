import React from 'react';
import User, { Profile, Setting, UserKey } from './User';

const App = () => {
  return (
    <div>
      <h2>Importing and Exporting Components</h2>
      <User/>
      <Profile/>
      <Setting/>
      <h2>{UserKey}</h2>
    </div>
  );
};

export default App;