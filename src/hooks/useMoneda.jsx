import React, { useState, Fragment } from 'react';

const UseMoneda = (label, estadoInicial, opciones) => {

  const [estado, actualizarEstado] = useState(estadoInicial);

  const selectMoneda = () => (
    <Fragment>
      <label>{label}</label>
      <select
        onChange={(e) => actualizarEstado(e.target.value)}
        value={estado}
      >
        <option>--Selecciona una moneda--</option>
        {opciones.map(opcion => (
          <option key={opcion.codigo} value={opcion.codigo}> {opcion.nombre} </option>
        ))}
      </select>
    </Fragment>
  )

  return [estado, selectMoneda, actualizarEstado];
}
 
export default UseMoneda;