import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import "./Home.scss";
import { useEffect } from "react";
import { fetchDataFromAPI } from "../../utils/api";
import { Appstore } from "../../utils/Context";
const Home = () => {
  const { categories, setCategories, products, setProducts } = Appstore();

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getProducts = () => {
    fetchDataFromAPI("/api/products?populate=*")
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCategories = () => {
    fetchDataFromAPI("/api/categories?populate=*")
      .then((data) => {
        setCategories(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(categories);
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="lyout">
          <Category categories={categories} />
          <Products products={products} headingtext="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
