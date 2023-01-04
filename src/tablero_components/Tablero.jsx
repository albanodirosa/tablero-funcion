import React, { Component } from 'react';

import Equipo from './Equipo';

import Arg from "../img/arg.svg";
import Usa from "../img/usa.svg";

class Tablero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local: 0,
      visitante: 0
    }
  }

  /* Cree sus funciones aquí abajo */

  incLocalUno = () => {
    this.setState({
      local: this.state.local + 1
    })
  }

  incLocalDos = () => {
    this.setState({
      local: this.state.local + 2
    })
  }

  incLocalTres = () => {
    this.setState({
      local: this.state.local + 3
    })
  }

  decLocalUno = () => {
    this.setState({
      local: this.state.local - 1
    })
  }

  decLocalDos = () => {
    this.setState({
      local: this.state.local - 2
    })
  }

  decLocalTres = () => {
    this.setState({
      local: this.state.local - 3
    })
  }

  incVisitaUno = () => {
    this.setState({
      visitante: this.state.visitante + 1
    })
  }

  incVisitaDos = () => {
    this.setState({
      visitante: this.state.visitante + 2
    })
  }

  incVisitaTres = () => {
    this.setState({
      visitante: this.state.visitante + 3
    })
  }

  decVisitaUno = () => {
    this.setState({
      visitante: this.state.visitante - 1
    })
  }

  decVisitaDos = () => {
    this.setState({
      visitante: this.state.visitante - 2
    })
  }

  decVisitaTres = () => {
    this.setState({
      visitante: this.state.visitante - 3
    })
  }

  reiniciar = () => {
    this.setState({
      local: 0,
      visitante: 0
    })
  }

  render () {
    return (
      <>
        <h4>{this.props.children}</h4>
        <div className='tablero_grupo'>
          <div className='contenedor_local'>
            {/* Inyección de componente */}
            <Equipo title="Local: " contador={ this.state.local } bandera={ Arg } />

            <button className='btn_inc' onClick={ this.incLocalUno }>+ 1</button>
            <button className='btn_inc' onClick={ this.incLocalDos }>+ 2</button>
            <button className='btn_inc' onClick={ this.incLocalTres }>+ 3</button>
            <button className='btn_dec' onClick={ this.decLocalUno}>- 1</button>
            <button className='btn_dec' onClick={ this.decLocalDos}>- 2</button>
            <button className='btn_dec' onClick={ this.decLocalTres}>- 3</button>
          </div>
          <div className='contenedor_visitante'>
            {/* Inyección de componente */}
            <Equipo title="Visitante: " contador={ this.state.visitante } bandera={ Usa } />

            <button className='btn_inc' onClick={ this.incVisitaUno}>+ 1</button>
            <button className='btn_inc' onClick={ this.incVisitaDos}>+ 2</button>
            <button className='btn_inc' onClick={ this.incVisitaTres}>+ 3</button>
            <button className='btn_dec' onClick={ this.decVisitaUno}>- 1</button>
            <button className='btn_dec' onClick={ this.decVisitaDos}>- 2</button>
            <button className='btn_dec' onClick={ this.decVisitaTres}>- 3</button>

          </div>
        </div>
        <button onClick={ this.reiniciar }>Reiniciar tablero</button>
      </>
    )
  }
}

export default Tablero;