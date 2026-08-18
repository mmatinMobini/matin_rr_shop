import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Navbar from "./components/navbar/Navbar"
import Layout from "./components/layout/Layout"
import Product from "./pages/product/Product"
import Cart from "./pages/cart/Cart"
import {  ShoppingcardContext_Provider } from "./context/ShoppingCardContext"
import { useState } from "react"

function App() {
  
// const [first, setfirst] = useState({})

return(
 
  <ShoppingcardContext_Provider>
  <Layout>
  <Routes>
    <Route  path={"/"} element={<Home />} />
    <Route  path={"/Store"} element={<Store />} />
    <Route  path={"/Product/:id"} element={<Product />} />
    <Route  path={"/Cart"} element={<Cart />} />
  </Routes>
</Layout>
</ShoppingcardContext_Provider>

)

}
export default App
