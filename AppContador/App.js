import React, { useState } from "react";
  

  
const App = () => {
  const [contador, setContador] = useState(0)
  
  const handleClick1 = () => {
    
    setContador(contador + 1)
  }
   
  const handleClick2 = () => {
    
    setContador(contador - 1)
  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '250%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '-15%',
    }}>
     
      Contador de Pessoas 
      <div style={{
        
        color: '#FF0000',
        fontSize: '120%',
        position: 'relative',
        top: '10vh',
      }}>
        {contador}
      </div>
      <div className="buttons">
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginRight: '20px',
          backgroundColor: 'green',
          borderRadius: '8%',
          color: '#006400',
        }}
          onClick={handleClick1}>+</button>
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          backgroundColor: 'red',
          borderRadius: '8%',
          color: '#CC0000',
          
        }}
          onClick={handleClick2}>-</button>
      </div>
    </div>
  )
}
  
export default App