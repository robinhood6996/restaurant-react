
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
import Dashboard from './Conponents/Admin/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Conponents/Admin/Dashboard/DashboardHome/DashboardHome';
import AddFood from './Conponents/Admin/Dashboard/AddFood/AddFood';
import AllFood from './Conponents/Admin/Dashboard/AllFood/AllFood';
import AddAdmin from './Conponents/Admin/Dashboard/AddAdmin/AddAdmin';
import SingleFood from './Conponents/Food/SingleFood/SingleFood';
import AdminRoute from './PrivateRoute/AdminRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
            <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
            <Route path="/food/:id" element={<SingleFood></SingleFood>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/dashboard" element={<AdminRoute><Dashboard /></AdminRoute>} />
            <Route path="/dashboard" element={<AdminRoute><Dashboard /></AdminRoute>}>
              <Route exact path={`dashboard`} element={<AdminRoute><Dashboard /></AdminRoute>} />
              <Route path={`/dashboard/addfood`} element={<AddFood />} />
              <Route path={`/dashboard/allfood`} element={<AllFood />} />
              <Route path={`/dashboard/addadmin`} element={<AddAdmin />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
