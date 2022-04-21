import React from "react";
import { Header } from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Adventures, Culture, BadURL404 } from "./pages/index";
import { Cart } from "./components/index";
import axios from "axios";

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  
  React.useEffect(() => {
    axios.get("http://localhost:8080/cart").then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const [cartOpened, setCartOpened] = React.useState(false);
  return (
    <div>
      <Header onClickCart={() => setCartOpened(true)} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {" "}
                {cartOpened ? (
                  <Cart onCloseCart={() => setCartOpened(false)} />
                ) : (
                  <Home />
                )}
              </div>
            }
          />
          <Route path="/adventures" element={<Adventures />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="*" element={<BadURL404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
