import { createContext, useState } from "react";

const CarritoContext = createContext();

export default CarritoContext;

export const CarritoProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const agregarItem = (newItem) => {
    setItems((items) => {
      const item = items.find((item) => item.id === newItem.id);
      if (!item) return [...items, { ...newItem, quantity: 1 }];
      return items.map((item) => {
        if (item.id !== newItem.id) return item;
        else return { ...item, quantity: item.quantity + 1 };
      });
    });
  };

  const eliminarItem = (itemId) => {
    setItems((items) => {
      const item = items.find((item) => item.id === itemId);
      if (!item) return items;
      if (item.quantity === 1)
        return items.filter((item) => item.id !== itemId);
      if (item.quantity > 1)
        return items.map((item) => {
          if (item.id !== itemId) return item;
          else return { ...item, quantity: item.quantity - 1 };
        });
    });
  };
  console.log(items);

  return (
    <CarritoContext.Provider value={{ agregarItem, eliminarItem, items }}>
      {children}
    </CarritoContext.Provider>
  );
};
