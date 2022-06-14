import {
  Routes as Switch,
  Route
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

import useGlobal from "./hooks/useGlobal";

const Routes = () => {
  const { authenticated } = useGlobal();

  return (
    <>
      {!authenticated ? (
        <Switch>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdmRegister />} />
          <Route path="*" element={<Home />} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="/admin" element={<AdmRegister />} />

          <Route path="/order/page" element={<Order />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/order/register" element={<OrderRegister />} />

          <Route path="/user/page" element={<User />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/user/update" element={<UserUpdate />} />
          <Route path="/user/search" element={<UserSearch />} />

          <Route path="*" element={<Home />} />

        </Switch>
      )}
    </>
  );
};

export default Routes;