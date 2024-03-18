import { useState } from 'react';
import './App.css';

// Gerenciar o estado de algum valor 
//getter setter

function App() {
  const [name, setName] = useState("Dryelison")
  const [number, setNumber] = useState(10)

  const changeNumber = () => {
    //Se tiver duas mudanças de estado, só altera uma vez (um por um)
    //setNumber(number + 1);
    //setNumber(number + 1);

   //devemos usar o previous value
    setNumber((prevNumber ) => prevNumber + 1);
    setNumber((prevNumber ) => prevNumber + 1);
    
  };

  
  return (
    <div className='App'>
        <h2>Meu nome é: {name}</h2>
        <input type="text" value={name} onChange={(e) =>setName(e.target.value)}/>
    <div>
      <p>Número:{number}</p>
      <button onClick={changeNumber}>Mudar número</button>
      </div>
    </div>
  )
}

export default App
