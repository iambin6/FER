import { useState } from "react";

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
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h2 className="h4 mb-0">🍔 Thực đơn</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {foods.map((food) => (
                  <li key={food.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{food.name} - {food.price.toLocaleString()} VNĐ</span>
                    <button className="btn btn-outline-primary btn-sm" onClick={() => addToCart(food)}>Đặt</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-success text-white">
              <h2 className="h4 mb-0">🛒 Giỏ hàng</h2>
            </div>
            <div className="card-body">
              {cart.length === 0 ? (
                <p className="text-muted">Chưa có món nào</p>
              ) : (
                <ul className="list-group list-group-flush mb-3">
                  {cart.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between">
                      <span>{item.name}</span>
                      <span>{item.price.toLocaleString()} VNĐ</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="card-footer d-flex justify-content-between font-weight-bold">
              <strong>Tổng tiền:</strong>
              <strong className="text-danger">{total.toLocaleString()} VNĐ</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
