import React from "react";
import { useState, useEffect } from "react";
import { ItemCard } from "./ItemCard";

export const Items = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:5001/stock/allstock", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className="m-10 grid grid-cols-3 gap-4">
      {items &&
        items.map((item) => (
          <>
            <ItemCard key={item.id} item={item} />
          </>
        ))}
    </div>
  );
};
