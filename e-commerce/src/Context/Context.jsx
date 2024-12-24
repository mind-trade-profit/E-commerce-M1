import { useState, createContext, useContext } from "react"
import { useNotification } from "../Notifications/Notifications"



const CartContext = createContext({
  cart: [],
  addItem: () => { },
  removeItem: () => { },
  totalQuantity: 0,
  total: 0,
  clearCart: () => { }
})

//create cartProvider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const { showNotification, showNotificationError } = useNotification()

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart(prod => [...prod, productToAdd])
    } else {
      showNotificationError("This Product Is already In cart", productToAdd.name)
      showNotification = []
    }
  }


  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  const removeItem = (id) => {
    const cartToUpdate = cart.filter(prod => prod.id !== id)
    setCart(cartToUpdate)
  }


  const getTotalQuantity = () => {
    let count = 0

    cart.forEach(prod => {
      count += prod.total
    })

    return count
  }

  const totalQuantity = getTotalQuantity()

  const getTotal = () => {
    let count = 0

    cart.forEach(prod => {
      count += prod.total * prod.price
    })

    return count
  }

  const total = getTotal()

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, total, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}