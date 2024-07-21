
import { Route, Routes } from 'react-router-dom'
import Categories from './Components/Categories'
import Header from './Components/Header'
import Home from './Home'
import SellArt from './AdminComponents/SellArt'
import Yourwork from './Components/Shop'
import WorkPage from './Pages/WorkPage'
import Artsdetail from './Pages/Artsdetail'
import { CartProvider } from './CartContext'
import CheckoutForm from './Components/CheckoutFrom'
import Checkout from './Pages/Checkout'
import Thankyou from './Pages/Thankyou'
import { SearchProvider } from './SearchContext'
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.


function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };
  return (
    <>
    <CartProvider>
      <SearchProvider>
      <Header/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path="/sellart" element={<SellArt/>}/>
        <Route path='/shop' element={<Yourwork/>}/>
        <Route path='/art/:artId' element={<WorkPage/>}/>
        <Route path='/artpage/:artId' element={<Artsdetail/>}/>
        <Route path='/edit/:artId' element={<SellArt/>}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/ProductDisplay' element={<CheckoutForm/>} />
        <Route path='/Thankyou' element={<Thankyou/>} />
        </Routes>
        </SearchProvider>
      </CartProvider>
    </>
  )
}

export default App
