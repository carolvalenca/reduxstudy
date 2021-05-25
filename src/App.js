import logo from './logo.svg';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState()
  const dispatch = useDispatch()
  const teste = useSelector(state => state.clickState)


  function inputChange(event) {
    setInputValue(event.target.value)
    console.log(inputValue)
  }

  return (
    <div className="App" style={{ paddingTop: '10px' }}>
      <input type='text' value={inputValue} onChange={inputChange}/>
        <button onClick={() => dispatch(clickButton(inputValue))}>
          Click me!
        </button>
        <h1>{teste.newValue}</h1>
    </div>
  );
}


export default App;
