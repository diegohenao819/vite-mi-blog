import React from "react";
import { useState, useEffect } from "react";
import { Global } from "../../../helpers/Global";
import { Peticion } from "../../../helpers/Peticion";

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const { datos, cargando } = await Peticion(Global.url + "articulos", "GET");

    // let peticion = await fetch(url, {
    //   method: "GET",
    // });
    // let datos = await peticion.json();

    if (datos.status === "success") {
      setArticulos(datos.articulos);
    }
    setCargando(false);
  };

  return (
    <>
      {cargando ? <h1>Cargando...</h1> : null}
      {articulos.map((articulo) => {
        return articulos.length >= 1 ? (
          <article key={articulo._id} className="articulo-item">
            <div className="mascara">
              <img src="https://via.placeholder.com/150" alt="imagen" />
            </div>
            <div className="datos">
              <h3 className="title">{articulo.titulo}</h3>
              <p className="description">{articulo.contenido}</p>
              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
            </div>
          </article>
        ) : (
          <h1>No hay articulos</h1>
        );
      })}
    </>
  );
};
