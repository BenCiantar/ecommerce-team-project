import React from "react";
import { Header } from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Adventures,
  Culture,
  BadURL404,
  ProductInfo,
  Login,
  Orders,
  Register,
  SearchResults,
} from './pages/index';

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({ isLoggedIn: false });
  const [selectedItem, setSelectedItem] = React.useState([]);

  return (
    <div>
      <BrowserRouter>
        <Header
          cartItems={cartItems}
          setCartItems={setCartItems}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          setSelectedItem={setSelectedItem}
        />
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
              <Adventures cartItems={cartItems} setCartItems={setCartItems} currentUser={currentUser}/>
            }
          />
            <Route path="/culture" 
            element={<Culture cartItems={cartItems} setCartItems={setCartItems} currentUser={currentUser}/>
          } 
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="/searchresults/:searchInput" element={<SearchResults />} />
          <Route path="*" element={<BadURL404 />} />
          <Route path="/product/:id" element={<ProductInfo cartItems={cartItems} setCartItems={setCartItems} selectedItem={selectedItem} setSelectedItem={setSelectedItem} currentUser={currentUser}/>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
