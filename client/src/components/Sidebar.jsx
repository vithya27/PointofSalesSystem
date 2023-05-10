import React from "react";
import {
  HomeIcon,
  ChartBarSquareIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import SidebarCard from "./SidebarCard";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-span-2 xs:col-span-1 flex flex-col items-center px-4 md:items-start">
      <img
        className="m-4 h-12 w-12"
        src="https://i.imgur.com/0cgagZP.png"
        alt="logo"
      />
      <Link to="/">
        <SidebarCard Icon={HomeIcon} title="Home" />
      </Link>

      <Link to="/inventory">
        <SidebarCard Icon={ChartBarSquareIcon} title="Inventory" />
      </Link>

      <Link to="/invoices">
        <SidebarCard Icon={BanknotesIcon} title="Invoices" />
      </Link>
    </div>
  );
};

export default Sidebar;
