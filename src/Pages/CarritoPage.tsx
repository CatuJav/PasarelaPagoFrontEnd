import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

export const CarritoPage = () => {
  const { productosCarrito } = useContext(DataContext);

  let total = 0;
  productosCarrito.map((item) => {
    total = total + item.precio;
  });

  console.log(total);

  return (
    <div>
      <h1>Carrito</h1>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-lg-2 ">
          <div className="col">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {productosCarrito.map((it, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{it.id}</td>
                        <td>{it.titulo}</td>
                        <td>{it.precio}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                    <tr>
                        <td><h2>Total ${total}</h2></td>
                    </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="col">
            <div
              style={{ backgroundColor: "red", height: 200, width: 200 }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
