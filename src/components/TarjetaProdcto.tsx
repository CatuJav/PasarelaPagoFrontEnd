import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

interface Props {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  precio: number;
}

export const TarjetaProdcto = (datos: Props) => {
  const { setProductos } = useContext(DataContext);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={datos.imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{datos.titulo}</h5>
        <p className="card-text">{datos.descripcion}</p>
        <p>${datos.precio}</p>
        <button className="btn btn-primary" onClick={() => {setProductos(datos)}}>
          Agregar
        </button>
      </div>
    </div>
  );
};
