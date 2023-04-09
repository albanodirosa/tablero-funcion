function Equipo({ title,contador,bandera }) {
  return (
      <div className="tablero_cabecera">
        <h3>{ title }</h3>
        <h3>{ contador }</h3>

        <img className='img_sel' src={ bandera } alt="" />
      </div>
  )
}

export default Equipo;