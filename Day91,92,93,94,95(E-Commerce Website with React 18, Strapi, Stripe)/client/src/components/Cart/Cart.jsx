import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
import { Appstore } from "../../utils/Context";
import { makePaymentRequest } from "../../utils/api";
import { loadStripe } from "@stripe/stripe-js";
const Cart = ({ setShowCart }) => {
  const { cartSubTotal, cartItems } = Appstore();
  const stripePromise = loadStripe(process.env.REACT_APP_STRIP_PUBLISHABLE_KEY);

  const handlePayout = async () => {
    try {
      const stripe = await stripePromise;
      const result = await makePaymentRequest.post("api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: result.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn">
            <MdClose onClick={() => setShowCart(false)} size={25} />
          </span>
        </div>
        {!cartItems.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart.</span>
            <button
              className="return-cta"
              onClick={() => {
                setShowCart(false);
              }}
            >
              Return To Shop
            </button>
          </div>
        )}
        <>
          <CartItem />
          {!!cartItems.length && (
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <div className="text total">PKR {cartSubTotal}</div>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={handlePayout}>
                  Check out
                </button>
              </div>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Cart;
