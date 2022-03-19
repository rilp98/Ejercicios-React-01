import React, {useState} from 'react'; 

function Practica() {

  const [useCount,setCount] = useState(0);
  
  const countHandler = () => setCount( useCount + 1);
  
  const restHandler = ( ) => setCount ( useCount => useCount>0 ? useCount-1 : 0 );

  const people=[

    {id:1,name:"Paola", edad:22},
    {id:2,name:"Christian", edad:23},
    {id:3,name:"Omar", edad:21},
    {id:4,name:"Barbara", edad:21}

  ]
  

  
  return (

    <div className="App">
      
      <button onClick={countHandler}>+</button>
      <button onClick={restHandler}>-</button>
      <p>{useCount}</p>

    
      {people.map( (person)=> {
        return(
          <p key={person.id}> {person.name} - {person.edad}  </p>
        )
      })}
    </div>

  );
}

export default Practica;
