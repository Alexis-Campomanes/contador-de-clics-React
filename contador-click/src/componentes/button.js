import React from 'react';
import '../Estilos.css/Botones.css'

export function Boton ({ text, esBotonDeClic, manejarClic }){
    return (
      <button
        className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
        onClick ={manejarClic}>
        {text}
      </button>
    );
}