import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaCartPlus,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Appstore } from "../../utils/Context";
import { useState } from "react";
const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { handleAddToCart } = Appstore();
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  if (data.length <= 0) return;
  const { title, categories, description, img, price } = data[0].attributes;
  console.log(data[0]);
  return (
    <div className="single-product-main">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={`${process.env.REACT_APP_BASE_URL}${img?.data[0]?.attributes.url}`}
              alt={title}
            />
          </div>
          <div className="right">
            <span className="name">{title}</span>
            <span className="price">{price}</span>
            <span className="description">{description}</span>
            <div className="cart-buttons">
              <div className="quantity-btns">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="cart-btn"
                onClick={() => {
                  handleAddToCart(data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                Add To Cart
              </button>
            </div>
            <span className="divider" />
            <div className="info-items">
              <span className="text-bold">
                Category:
                <span>{categories?.data[0]?.attributes.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebook size={18} />
                  <FaTwitter size={18} />
                  <FaInstagram size={18} />
                  <FaLinkedin size={18} />
                  <FaPinterest size={18} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoreisId={data[0].attributes.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
