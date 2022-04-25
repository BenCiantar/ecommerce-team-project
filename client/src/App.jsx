import React from 'react';
import { Header } from './components/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Adventures, Culture, BadURL404, Login } from './pages/index';

function App() {
  const [cartItems, setCartItems] = React.useState([]);

  return (
    <div>
      <BrowserRouter>
        <Header cartItems={cartItems} setCartItems={setCartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/adventures"
            element={
              <Adventures cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route path="/culture" element={<Culture />} />
          <Route path="*" element={<BadURL404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
