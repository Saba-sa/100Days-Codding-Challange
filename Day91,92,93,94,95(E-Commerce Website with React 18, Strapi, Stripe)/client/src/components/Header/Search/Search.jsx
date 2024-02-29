import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState();
  const navi = useNavigate();
  let data = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );
  if (data.length) {
    data = null;
  }

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          placeholder="Search for product..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        <MdClose onClick={() => setShowSearch(false)} className="close-btn" />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data.data.length > 0 ? (
            data?.data?.map((item) => {
              const { title, description, img } = item.attributes;
              return (
                <div
                  className="search-result-item"
                  key={item.id}
                  onClick={() => {
                    navi(`/product/${item.id}`);
                    setShowSearch(false);
                  }}
                >
                  <div className="img-container">
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}${img.data[0].attributes.url}`}
                      alt="product"
                    />
                  </div>
                  <div className="prod-detail">
                    <span className="name">{title}</span>
                    <span className="description">{description}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Nothing</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
