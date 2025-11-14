import React, { useState, useCallback } from "react";
import Child from "./Child.jsx";

import burger1 from "../picture/Butter-Burger.jpeg";
import burger2 from "../picture/Pizza-Burger.jpg";
import burger3 from "../picture/Chilli-Burger.jpeg";
import burger4 from "../picture/crispy-chicken-burger.jpg";
import burger5 from "../picture/Mashroom-Beef-Burger.jpg";
import burger6 from "../picture/grilled-beef-burger.jpeg";

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [orderSent, setOrderSent] = useState(false);
  const [returnMsg, setReturnMsg] = useState("");

  // Add items to cart
  const handleAddToCart = useCallback((item) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.name === item.name);
      if (exists) {
        return prev.map((p) =>
          p.name === item.name ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }, []);

  // Send order
  const handleSendOrder = () => {
    if (!name || !phone || !address) {
      alert("Please fill in your Name, Phone Number, and Address");
      return;
    }

    setOrderSent(true);
    setCart([]); // Reset cart → total becomes zero
    setReturnMsg(
      `🚚 Order for ${name} (Phone: ${phone}) will be delivered to: ${address}  and payment will be recieve on delivery 🍔 Thank you for ordering ❤️ `
    );
    setName("");
    setPhone("");
    setAddress(""); // Clear fields
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">🍔 Our Menu</h2>

      {/* MENU ITEMS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Child imgSrc={burger1} name="Butter Burger" about="Classic taste with a buttery twist" price={20} onAddToCart={handleAddToCart} />
        <Child imgSrc={burger2} name="Pizza Burger" about="Loaded with cheese, sauce, and flavor" price={18} onAddToCart={handleAddToCart} />
        <Child imgSrc={burger3} name="Chilli Burger" about="Hot, zesty, and irresistibly delicious" price={15} onAddToCart={handleAddToCart} />
        <Child imgSrc={burger4} name="Crispy Chicken Burger" about="Crispy outside, tender juicy inside" price={17} onAddToCart={handleAddToCart} />
        <Child imgSrc={burger5} name="Mushroom Beef Burger" about="Juicy beef topped with sautéed mushrooms" price={18} onAddToCart={handleAddToCart} />
        <Child imgSrc={burger6} name="Grilled Beef Burger" about="Classic beef burger with smoky twist" price={16} onAddToCart={handleAddToCart} />
      </div>

      {/* CART SECTION */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-xl font-semibold mb-3 text-center">🛒 Your Cart</h3>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="max-w-md mx-auto">
            {cart.map((item) => (
              <div key={item.name} className="flex justify-between items-center bg-white p-3 mb-2 rounded shadow">
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-600 text-sm">
                    ${item.price} × {item.qty}
                  </p>
                </div>
                <span className="font-bold">${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}

            {/* TOTAL */}
            <div className="flex justify-between items-center mt-4 font-semibold">
              <span>Total:</span>
              <span>${cart.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2)}</span>
            </div>
          </div>
        )}

        {/* ADDRESS, NAME & PHONE INPUT */}
        {!orderSent && cart.length > 0 && (
          <div className="mt-6 p-4 border rounded shadow max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-3 text-center">🧾 Delivery Details</h3>

            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full p-2 border rounded mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter your Phone Number"
              className="w-full p-2 border rounded mb-3"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <textarea
              placeholder="Enter your Address"
              className="w-full p-2 border rounded mb-3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>

            <button
              onClick={handleSendOrder}
              className="w-full bg-green-600 text-white py-2 rounded"
            >
              Send Order
            </button>
          </div>
        )}

        {/* ORDER CONFIRMATION */}
        {orderSent && returnMsg && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded text-center max-w-md mx-auto">
            <h3 className="font-bold text-green-700">🎉 Order Sent!</h3>
            <p className="mt-2">{returnMsg}</p>
            <p className="mt-3">🍔 Thanks for choosing Burger Heaven!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
