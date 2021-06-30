import React, {useState} from 'react'

export const CartContext = React.createContext([])

export const CartProvider = ({children}) => {
      const [productos, addItem] = useState ([])
      console.log (productos)
      const addItem = (productos) => {
      const ProductoAgregado = productos.find(element)=> elment.item.id != element.item.id;
      AddItem (ProductoAgregado);
      


      }
      return <CartContext.Provider value = {[productos,addItem]}>
      {children}
      </CartContext.Provider>
}
      