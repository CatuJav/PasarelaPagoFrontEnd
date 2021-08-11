import { createContext, useState } from "react";

interface Productos {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  precio: number;
}

interface ContextProps {
    productosCarrito:Productos[];
    setProductos:(producto: Productos) => void;

}

export const DataContext = createContext({} as ContextProps);

const datos: Productos[] = [

];

export const DataProvider = ({ children }: { children: JSX.Element }) => {
  const [productosCarrito, setProductosCarrito] = useState<Productos[]>(datos);

  const setProductos = (producto: Productos) => {
    setProductosCarrito([...productosCarrito, producto]);
  };

  const removeItem =( item:Productos )=> {
    var i = productosCarrito.indexOf( item );
 
    if ( i !== -1 ) {
        productosCarrito.splice( i, 1 );
    }
}

  return (
    <DataContext.Provider
      value={{
        productosCarrito,
        setProductos,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
