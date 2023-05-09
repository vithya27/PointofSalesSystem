import { CurrentOrder } from "../components/CurrentOrder";
import { Order } from "../components/Order";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { createContext } from "react";

export const CartContext = createContext();
export const RefreshContext = createContext();

const Home = () => {
  const [cart, setCart] = useState([]);
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="lg:max-w-6xl mx-auto grid grid-cols-9 max-h-screen">
      <Sidebar />
      <CartContext.Provider value={[cart, setCart]}>
        <RefreshContext.Provider value={[refresh, setRefresh]}>
          <Order />

          <CurrentOrder />
        </RefreshContext.Provider>
      </CartContext.Provider>
    </div>
  );
};

export default Home;
