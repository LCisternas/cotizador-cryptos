import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

function App() {

  const [monedaLocal, setMonedaLocal] = useState('');
  const [cryptoMoneda, setCryptoMoneda] = useState('');
  const [precio, setPrecio] = useState([]);

  useEffect(() => {
    if(monedaLocal !== '' || cryptoMoneda !== '') {
      const consultaPrecio = async () => {
        const url = `https://min-api.cryptocompare.com/data/price?fsym=${cryptoMoneda}&tsyms=${monedaLocal}`
        const resultado = await axios.get(url)
        setPrecio(resultado.data)
      }
      consultaPrecio()
    }
  }, [cryptoMoneda, monedaLocal])

  return (
    <div className='main'>
      <div className='header'>
        <Header />
      </div>
      <div className='formulario'>
        <Formulario setMonedaLocal={setMonedaLocal} setCryptoMoneda={setCryptoMoneda} />
      </div>
      <div className='resultado'>
        <Resultado precio={precio} monedaLocal={monedaLocal} cryptoMoneda={cryptoMoneda} />
      </div>
    </div>
  );
}

export default App;
