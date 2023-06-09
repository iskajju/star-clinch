import './App.css'
import Home from './Home';
import {
  BrowserRouter, Route, Routes

} from "react-router-dom";

import Checkout from './Checkout';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
