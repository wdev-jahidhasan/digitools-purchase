import './App.css'
import Banner from './Component/Banner'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Products from './Component/Products'
import Pricing from './Component/Pricing'
import Statistics from './Component/Statistics'
import Steps from './Component/Steps'
import Cart from './Component/Cart'
import Premium from './Component/Premium'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';

const getProducts = async () => {
  const res = await fetch("/info.json")
  return res.json()
}
const productPromise = getProducts();

function App() {

  const [activeTab, setActiveTab] = useState('products');
  const [carts, setCarts] = useState([]);
  
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Statistics></Statistics>
      <Premium></Premium>


      <div className="tabs tabs-box justify-center max-w-7xl mx-auto bg-white bg-linear-to-r from-[#4f39f67a] to-[#9614fa77] w-[90%] md:w-[50%] text-purple-800">
        <input 
        type="radio" 
        name="my_tabs_1" 
        className="tab rounded-full w-36 font-semibold text-lg" 
        aria-label="Products" 
        defaultChecked 
        onClick={()=> setActiveTab('products')}
        />
        <input 
        type="radio" 
        name="my_tabs_1" 
        className="tab rounded-full w-36 font-semibold text-lg" 
        aria-label={`Cart (${carts.length})`} 
        onClick={()=> setActiveTab('cart')}
        />
      </div>

      {activeTab === "products" && 
      <Products productPromise={productPromise}  carts={carts} setCarts ={setCarts}>
      </Products> }

      {activeTab === "cart" && 
      <Cart carts={carts} setCarts={setCarts}>
      </Cart> }

      <Steps></Steps>
      <Pricing></Pricing>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
