import './App.css'
import Banner from './Component/Banner'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Products from './Component/Products'
import Pricing from './Component/Pricing'
import Statistics from './Component/Statistics'
import Steps from './Component/Steps'
import Cart from './Component/Cart'

const getProducts = async () => {
  const res  = await fetch("/info.json")
  return res.json()
}
const productPromise = getProducts();

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Statistics></Statistics>
    <Products productPromise={productPromise}></Products>
    <Cart></Cart>
    <Steps></Steps>
    <Pricing></Pricing>
    <Footer></Footer>
    </>
  )
}

export default App
