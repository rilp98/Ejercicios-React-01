import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './style.css';

const CounterApp= ({value}) =>{

    //useState del contador
    const [counter,setCounter] = useState(value);

    // Suma uno al counter
    const handleAdd = () => {
        setCounter( (s) => s+1 );
    }

    //Resta uno al counter
    const handleRest = () => {
        setCounter( (r) => r-1 );
    }

    //Coloca el valor por defecto
    const handleReset = () => {
        setCounter( value );
    }

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    
    return(
    <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>

        <button onClick={handleAdd}>+</button>
        <button onClick={handleRest}>-</button>
        <button onClick={handleReset}>Reset</button>

        <div >
        <p onClick={showSidebar} className={sidebar ? 'color' : 'active'} >Haz click</p>
        </div>
    </>
    ) 
}

CounterApp.propTypes = {
    value:PropTypes.number
}

CounterApp.defaultProps  = {
    value:255
}

export default CounterApp;