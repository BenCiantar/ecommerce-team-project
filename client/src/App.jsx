import React from "react";
import { Header } from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Adventures, Culture, BadURL404 } from "./pages/index";
import axios from "axios";

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  
  React.useEffect(() => {
    axios.get("http://localhost:8080/cart").then((res) => {
      setCartItems(res.data);
    });
  }, []);

  return (
    <div>
      <Header onClickCart={() => setCartOpened(true)} cartItems={ cartItems } setCartItems={ setCartItems } />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adventures" element={<Adventures cartItems={ cartItems } setCartItems={ setCartItems } />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="*" element={<BadURL404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
