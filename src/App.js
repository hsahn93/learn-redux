import React from 'react'
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import Color from './components/Color';


function App() {
  return (
    <div>
      <Color />
      <hr />

      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}
export default App;
