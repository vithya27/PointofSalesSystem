import { CurrentOrder } from "../components/CurrentOrder";
import { Order } from "../components/Order";
import { createContexts, useState } from "react";
import Sidebar from "../components/Sidebar";
import { createContext } from "react";

export const CartContext = createContext();

const Home = () => {
  const [cart, setCart] = useState([]);
  return (
    <div className="lg:max-w-6xl mx-auto grid grid-cols-9 max-h-screen">
      <Sidebar />
      <CartContext.Provider value={[cart, setCart]}>
        <Order />

        <CurrentOrder />
      </CartContext.Provider>
    </div>
  );
};

export default Home;
