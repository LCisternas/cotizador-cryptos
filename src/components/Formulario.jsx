import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UseMoneda from '../hooks/useMoneda';
import UseCrypto from '../hooks/useCrypto';

const Formulario = ({ setMonedaLocal, setCryptoMoneda }) => {

  const MONEDAS = [
    {nombre: 'Dolar', codigo: 'USD'},
    {nombre: 'Euro', codigo: 'EUR'},
    {nombre: 'Libra', codigo: 'GBP'},
    {nombre: 'Peso Chileno', codigo: 'CLP'},
    {nombre: 'Peso Argentino', codigo: 'ARS'},
    {nombre: 'Peso Mexicano', codigo: 'MXN'},
  ]
  const[monedas, SelectMonedas] = UseMoneda('Selecciona tu moneda', '', MONEDAS);
  const [AllCryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false)
  const [cryptos, SelectCryptos] = UseCrypto('Selecciona tu Crypto-Moneda', '', AllCryptos);

  useEffect(() => {
    const consultaCryptos = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD'
      const resultado = await axios.get(url)
      setCryptos(resultado.data.Data)
    }
    consultaCryptos()
  }, [])

  const cotizandoPrecio = e => {
    e.preventDefault()
    if(!monedas || !cryptos) {
      setError(true)
      return;
    }
    setMonedaLocal(monedas);
    setCryptoMoneda(cryptos);
  }

  return (
    <div className='formulario-container'>
      <form onSubmit={cotizandoPrecio}>
        <SelectMonedas />
        <SelectCryptos />
        <button
          type='submit'
          className='form-btn'
        > ¡Cotizar! </button>
      </form>
    </div>
  );
}
 
export default Formulario;