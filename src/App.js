import React from 'react';
import Intro from './component/Intro';
import Spreading from './component/Spreading';
import Array from './component/Array';
import Immutable from './component/Immutable';
import { Immer } from './component/immer';






const App = () => {
  return (
    <div className="app-container">
      <Intro/>
      <Spreading/>
      <Array/>
      <Immutable/>
      <Immer/>
    </div>
  );
};

export default App;
