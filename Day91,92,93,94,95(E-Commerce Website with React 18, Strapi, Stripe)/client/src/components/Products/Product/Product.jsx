import "./Product.scss";
import { useNavigate } from "react-router-dom";
const Product = ({ id, product }) => {
  const { title, price, img } = product;
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img
          src={process.env.REACT_APP_BASE_URL + img.data[0].attributes.url}
          alt=""
        />
      </div>
      <div className="product-detail">
        <span className="name">{title}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default Product;
