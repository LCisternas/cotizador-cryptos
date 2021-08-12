import React, { useState, Fragment } from 'react';

const UseCrypto = (label, estadoInicial, opciones) => {

  const [estado, guardarEstado] = useState(estadoInicial);
  
  const selectCryto = () => (
    <Fragment>
      <label> {label} </label>
      <select
        onChange={(e) => guardarEstado(e.target.value)}
        value={estado}
      >
        <option>--Selecciona una Crypto-Moneda</option>
        {opciones.map(opcion => (
          <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name} > {opcion.CoinInfo.FullName} </option>
        ))}
      </select>
    </Fragment>
  )

  return[estado, selectCryto, guardarEstado];
}
 
export default UseCrypto;