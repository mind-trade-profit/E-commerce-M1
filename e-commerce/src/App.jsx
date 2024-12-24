import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./Context/Context"
import {NotificationProvider} from "./Notifications/Notifications"
import CartView from "./components/CartView/CartView"
import Checkout from "./components/Checkout/Checkout"
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer></ItemListContainer>} />
              <Route path="/category/:category" element={<ItemListContainer></ItemListContainer>} />
              <Route path="/detail/:id" element={<ItemDetailContainer></ItemDetailContainer>} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="*" element={<h4 className="errorCard">Error 404</h4>} />
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
