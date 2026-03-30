import './App.css'
import Banner from './Component/Banner'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Products from './Component/Products'
import Pricing from './Component/Pricing'
import Statistics from './Component/Statistics'
import Steps from './Component/Steps'
import Cart from './Component/Cart'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Statistics></Statistics>
    <Products></Products>
    <Cart></Cart>
    <Steps></Steps>
    <Pricing></Pricing>
    <Footer></Footer>
    </>
  )
}

export default App
