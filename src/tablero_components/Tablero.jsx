import { useState } from 'react';

import Equipo from './Equipo';

import Arg from "../img/arg.svg";
import Usa from "../img/usa.svg";

function Tablero({ children }) {
  const [local, setLocal] = useState(0)
  const [visitante, setVisitante] = useState(0)

  const incLocalUno = () => {
      setLocal (local + 1)
  }

  const incLocalDos = () => {
    setLocal (local + 2)
  }

  const incLocalTres = () => {
    setLocal (local + 3)
  }

  const decLocalUno = () => {
    setLocal (local - 1)
  }

  const decLocalDos = () => {
    setLocal (local - 2)
  }

  const decLocalTres = () => {
    setLocal (local - 3)
  }

  const incVisitaUno = () => {
    setVisitante (visitante + 1)
  }

  const incVisitaDos = () => {
    setVisitante (visitante + 2)
  }

  const incVisitaTres = () => {
    setVisitante (visitante + 3)
  }

  const decVisitaUno = () => {
    setVisitante (visitante - 1)
  }

  const decVisitaDos = () => {
    setVisitante (visitante - 2)
  }

  const decVisitaTres = () => {
    setVisitante (visitante - 3)
  }

  const reiniciar = () => {
    setLocal (0)
    setVisitante (0)
  }

  return (
    <>
      <h4>{children}</h4>
      <div className='tablero_grupo'>
        <div className='contenedor_local'>
          { /*Inyección de componente*/ }
          <Equipo title="Local: " contador={ local } bandera={ Arg } />

          <button className='btn_inc' onClick={ incLocalUno }>+ 1</button>
          <button className='btn_inc' onClick={ incLocalDos }>+ 2</button>
          <button className='btn_inc' onClick={ incLocalTres }>+ 3</button>
          <button className='btn_dec' onClick={ decLocalUno }>- 1</button>
          <button className='btn_dec' onClick={ decLocalDos }>- 2</button>
          <button className='btn_dec' onClick={ decLocalTres }>- 3</button>
        </div>
        <div className='contenedor_visitante'>
          { /*Inyección de componente*/ }
          <Equipo title="Visitante: " contador={ visitante } bandera={ Usa } />

          <button className='btn_inc' onClick={ incVisitaUno }>+ 1</button>
          <button className='btn_inc' onClick={ incVisitaDos }>+ 2</button>
          <button className='btn_inc' onClick={ incVisitaTres }>+ 3</button>
          <button className='btn_dec' onClick={ decVisitaUno }>- 1</button>
          <button className='btn_dec' onClick={ decVisitaDos }>- 2</button>
          <button className='btn_dec' onClick={ decVisitaTres }>- 3</button>

        </div>
      </div>
      <button onClick={ reiniciar }>Reiniciar tablero</button>
    </>
  )
}

export default Tablero;