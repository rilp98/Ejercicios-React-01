import React from 'react'; 
import './App.css';
import CounterApp from '../CounterApp/';
import Practica from '../Practica/';

function App() {  
  return (
    <>
    <Practica />
    <CounterApp value ={10} />
    </>
  );
}

export default App;
