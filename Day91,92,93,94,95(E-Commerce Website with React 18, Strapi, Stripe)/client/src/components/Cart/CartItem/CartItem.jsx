import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import "./CartItem.scss";
import { Appstore } from "../../../utils/Context";

const CartItem = () => {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    Appstore();

  return (
    <div className="cart-products">
      {cartItems.map((cartItem) => {
        const { img, price, title, quantity } = cartItem.attributes;
        return (
          <div className="cart-product" key={cartItem.id}>
            <div className="img-container">
              <img
                src={`${process.env.REACT_APP_BASE_URL}${img.data[0].attributes.url}`}
                alt="cart"
              />
            </div>
            <div className="prod-detail">
              <div className="text">
                <span className="name">{title}</span>
                <MdClose
                  className="close-btn"
                  size={18}
                  onClick={() => handleRemoveFromCart(cartItem)}
                />
              </div>
              <div className="quantity-buttons">
                <span
                  onClick={() => handleCartProductQuantity("dec", cartItem)}
                >
                  -
                </span>
                <span>{quantity}</span>
                <span
                  onClick={() => handleCartProductQuantity("inc", cartItem)}
                >
                  +
                </span>
              </div>
              <div className="text">
                {quantity} x{" "}
                <span className="hightlight">PKR{price * quantity}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
