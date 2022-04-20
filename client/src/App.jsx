import { Header } from "./components/index";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Adventures from "./pages/Adventures/Adventures";
import Culture from "./pages/Culture/Culture";
import BadURL404 from "./pages/BadURL404/BadURL404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adventures" element={<Adventures />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="*" element={<BadURL404 />} />
    </Routes>
  );
}

export default App;
