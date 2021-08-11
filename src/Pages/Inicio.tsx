import React from "react";
import { TarjetaProdcto } from "../components/TarjetaProdcto";
import datoP from "../db/productos.json";

export const Inicio = () => {
    return (
        <div className="container mt-2">

          <div style={{display:'flex'}}>
            
            {datoP.map((item) => {
              return(<TarjetaProdcto key={item.id} id={item.id} descripcion={item.descripcion} imagen={item.imagen} precio={item.precio} titulo={item.titulo}/>);
              
            })}
          </div>
        </div>
      );
}
