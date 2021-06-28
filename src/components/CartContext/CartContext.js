import React, {useState} from 'react'

export const CartContext = React.createContext([])

export const CartProvider = ({children}) => {
      const [productos, setProductos] = useState ([])
      console.log (productos)

      return <CartContext.Provider value = {[productos,setProductos]}>
      {children}
      </CartContext.Provider>
}