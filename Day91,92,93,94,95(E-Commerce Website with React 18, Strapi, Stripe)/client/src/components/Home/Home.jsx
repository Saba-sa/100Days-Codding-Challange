import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import "./Home.scss";
import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../../utils/api";
import { Appstore } from "../../utils/Context";
import Loader from "./../Loader/Loader";
const Home = () => {
  const { categories, setCategories, products, setProducts } = Appstore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getProducts = () => {
    fetchDataFromAPI("/api/products?populate=*")
      .then((data) => {
        setProducts(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCategories = () => {
    fetchDataFromAPI("/api/categories?populate=*")
      .then((data) => {
        setCategories(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="lyout">
          {loading ? (
            <Loader />
          ) : (
            <>
              <Category categories={categories} />
              <Products products={products} headingtext="Popular Products" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
