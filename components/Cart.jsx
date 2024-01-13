// Cart.js
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { cartState, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button onClick={closeCart}>Close</button>
      </div>
      {cartState.items.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.Poster} alt={item.Title} />
          <div>
            <h4>{item.Title}</h4>
            <p>{item.Genre}</p>
            <p>{item.Price}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <div className="cart-total">
        <h4>Total: {/* Calculate total here */}</h4>
      </div>
    </div>
  );
};

export default Cart;
