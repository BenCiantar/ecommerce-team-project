import { Header } from './components/index';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adventures" element={<Adventures />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="*" element={<BadURL404 />}  />
    </Routes>  
  );
}

export default App;
