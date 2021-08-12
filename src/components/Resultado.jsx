import React from 'react';

const Resultado = ({ precio, monedaLocal, cryptoMoneda }) => {

  if(!precio) return null

  return (
    <div className='resultado-container'>
      {monedaLocal ? <h1>1 {cryptoMoneda} = {precio[monedaLocal]} {monedaLocal}</h1> : null}
    </div>
  );
}
 
export default Resultado;