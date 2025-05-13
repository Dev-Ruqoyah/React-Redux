import React from 'react';
import Intro from './component/Intro';
import Spreading from './component/Spreading';
import Array from './component/Array';
import Immutable from './component/Immutable';
import { Immer } from './component/immer';
import Counter from './component/Counter';
import Name from './component/Name';






const App = () => {
  return (
    <div className="app-container">
      <Intro/>
      <Spreading/>
      <Array/>
      <Immutable/>
      <Immer/>
      <Counter/>
      <Name/>
    </div>
  );
};

export default App;
