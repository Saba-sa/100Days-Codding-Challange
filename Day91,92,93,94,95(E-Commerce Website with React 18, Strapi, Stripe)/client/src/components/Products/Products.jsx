import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ products, innerPage, headingtext }) => {
  const temp = products?.splice(0, 6);
  return (
    <div className="products-container">
      <div className="product-content">
        {!innerPage && <div className="sec-heading">{headingtext}</div>}
        <div className="products">
          {temp?.map((product) => {
            const { id, attributes } = product;
            return <Product key={id} id={id} product={attributes} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
