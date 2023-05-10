import React from "react";
import { useState, useEffect, useContext } from "react";
import { CartContext, RefreshContext } from "../pages/Home";
import { ItemCard } from "./ItemCard";

export const Items = () => {
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [cart, setCart] = useContext(CartContext);

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
  }, [refresh]);

  const addItemToCart = async (item) => {
    let itemExistsInCart = await cart.find((i) => {
      return i._id === item._id;
    });

    if (itemExistsInCart) {
      let newCart = [];
      let newItem;

      cart.forEach((cartItem) => {
        if (cartItem._id === item._id) {
          newItem = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            subTotal: (cartItem.sellingPrice * (cartItem.quantity + 1)).toFixed(
              2
            ),
          };
          newCart.push(newItem);
        } else {
          newCart.push(cartItem);
        }
      });
      setCart(newCart);
    } else {
      let addItem = {
        ...item,
        quantity: 1,
        subTotal: item.sellingPrice,
      };
      setCart([...cart, addItem]);
    }
  };

  return (
    <>
      <div className="m-10 grid grid-cols-3 gap-4">
        {items &&
          items.map((item, key) => (
            <>
              <ItemCard
                key={key}
                item={item}
                onClick={() => addItemToCart(item)}
              />
            </>
          ))}
      </div>
    </>
  );
};
