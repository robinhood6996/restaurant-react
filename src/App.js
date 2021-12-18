
import './App.css';
import Home from './Conponents/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Conponents/Cart/Cart';
import Login from './Conponents/Login/Login/Login';
import Register from './Conponents/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Shop from './Conponents/Shop/Shop/Shop';
import Checkout from './Conponents/Checkout/Checkout/Checkout';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
            <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
