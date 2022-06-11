import {
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

import Home from './pages/Home'
import Login from './pages/Login'
import AdmRegister from './pages/AdmRegister'

import Order from './pages/Order'
import OrderRegister from './pages/OrderRegister'
import OrderList from './pages/OrderList'

import User from './pages/User'
import UserList from './pages/UserList'
import UserRegister from './pages/UserRegister'
import UserUpdate from './pages/UserUpdate'
import UserSearch from './pages/UserSearch'


import { useAuth } from "./context/AuthContext";

const Routes = () => {
  //const { isAuthenticated } = useAuth();

  const isAuthenticated = false;

  return (
    <>
      {!isAuthenticated ? (
        <Switch>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdmRegister />} />

          <Route path="/order/page" element={<Order />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/order/register" element={<OrderRegister />} />

          <Route path="/user/page" element={<User />} />
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/update" element={<UserUpdate />} />
          <Route path="/user/search" element={<UserSearch />} />


          <Route path="*" element={<Login />} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/orders" element={<Order />} />


          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Switch>
      )}
    </>
  );
};




export default Routes;