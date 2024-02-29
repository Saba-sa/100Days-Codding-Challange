import { useNavigate } from "react-router-dom";
import "./Category.scss";
const Category = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <section className="shop-by-category">
      <div className="categories">
        {categories?.map((category) => {
          const { id, attributes } = category;
          return (
            <div
              className="category"
              key={id}
              onClick={() => navigate(`/category/${id}`)}
            >
              <img
                src={`${
                  process.env.REACT_APP_BASE_URL +
                  attributes.img.data.attributes.url
                }`}
                alt={`${attributes.title}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
