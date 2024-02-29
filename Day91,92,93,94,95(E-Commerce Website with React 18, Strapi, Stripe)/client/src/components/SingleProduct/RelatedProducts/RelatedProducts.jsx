import Products from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";
const RelatedProducts = ({ productId, categoreisId }) => {
  const { data } = useFetch(
    `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoreisId}&pagination[start]=0&pagination[limit]=3`
  );
  console.log("data: ", data);
  return (
    <div className="related-products">
      <Products headingtext="Related Products" products={data} />
    </div>
  );
};

export default RelatedProducts;
