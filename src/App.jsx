import React from 'react';
import ActionBar from './components/ActionBar/ActionBar';
import Visualizer from './components/Visualizer/Visualizer';
import {CTX} from './Store';

export default function App() {
  const {state, dispatch} = React.useContext(CTX);

  React.useEffect(() => dispatch({type: 'reset'}), [dispatch]);

  return (
    <div className="App">
      <Visualizer array={state.array} algorithm={state.algorithm} />
      <ActionBar />
    </div>
  );
}
