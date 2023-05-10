import Home from "./pages/Home";
import { Inventory } from "./pages/Inventory";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Invoices from "./pages/Invoices";
function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
    </>
  );
}

export default App;
