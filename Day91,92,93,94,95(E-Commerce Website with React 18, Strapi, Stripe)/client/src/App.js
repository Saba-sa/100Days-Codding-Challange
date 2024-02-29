import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import NotFound from "./components/NotFound/NotFound.jsx";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Success from "./components/Success/Success.jsx";
import { Context } from "./utils/Context.js";
function App() {
  return (
    <Context>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Newsletter />
      <Footer />
    </Context>
  );
}

export default App;
