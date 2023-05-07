import { CurrentOrder } from "../components/CurrentOrder";
import { Order } from "../components/Order";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="lg:max-w-6xl mx-auto grid grid-cols-9 max-h-screen">
      <Sidebar />

      <Order />

      <CurrentOrder />
    </div>
  );
};

export default Home;
