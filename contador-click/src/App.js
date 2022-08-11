import './App.css';
import logoContador from './imagees/logo_contador.png'
import { Boton } from './componentes/button'
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics+1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='App-logo'>
        <img
        className='logoContador'
        src={logoContador}
        alt='Logo del contador' />
      </div>
      <div>
        <p className='titleContador'>CONTADOR DE CLICKS</p>
      </div>
      <div className='conteiner-principal'>
        <div>
        <Contador numClics={numClics} />
        </div>
        <div>
        <Boton
          text='Clic'
          esBotonDeClic={true}
          manejarClic = {manejarClic}
        />
        <Boton 
          text='Reiniciar'
          esBotonDeClic={false}
          manejarClic = {reiniciarContador}
        />
        </div>
      </div>
    </div>
  );
}

export default App;
