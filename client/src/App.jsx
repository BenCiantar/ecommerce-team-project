import React from "react";
import { Header } from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Adventures,
  Culture,
  BadURL404,
  Login,
  Orders,
  Register,
} from "./pages/index";

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({ isLoggedIn: false });

  return (
    <div>
      <BrowserRouter>
        <Header cartItems={cartItems} setCartItems={setCartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/adventures"
            element={
              <Adventures cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route path="/culture" element={<Culture />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<BadURL404 />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
