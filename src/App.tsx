import React from 'react';

import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './store';

function App() {

  const dispatch = useDispatch()

  const { bankRupt,depositMoney, withDrawMoney} = bindActionCreators(actionCreators, dispatch)

  const amount = useSelector((state: State) => state.bank)
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}></button>
    </div>
  );
}

export default App;
