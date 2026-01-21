import { useState } from "react";
import "./FoodOrder.css";

const foods = [
  { id: 1, name: "Pizza", price: 80000 },
  { id: 2, name: "Burger", price: 50000 },
  { id: 3, name: "Fried Chicken", price: 60000 },
];

export default function FoodOrder() {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="food-container">
      <h1>🍔 Đặt đồ ăn</h1>

      <h2>Thực đơn</h2>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>
            {food.name} - {food.price.toLocaleString()} VNĐ
            <button onClick={() => addToCart(food)}>Đặt</button>
          </li>
        ))}
      </ul>

      <h2>Giỏ hàng</h2>
      {cart.length === 0 ? (
        <p>Chưa có món nào</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price.toLocaleString()} VNĐ
            </li>
          ))}
        </ul>
      )}

      <h3>Tổng tiền: {total.toLocaleString()} VNĐ</h3>
    </div>
  );
}
