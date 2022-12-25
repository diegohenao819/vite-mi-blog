import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='jumbo'>
        <h1>Blog creado con React</h1>
        <p>Blog creado con MERN Stack </p>
        <Link to= "/articulos" className='button'>Ver Articulos</Link>
    </div>
  )
}
