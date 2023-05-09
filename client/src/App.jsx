import Home from "./pages/Home";
import { Inventory } from "./pages/Inventory";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </>
  );
}

export default App;
