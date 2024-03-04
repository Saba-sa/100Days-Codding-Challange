import React from "react";
import { Data } from "./Data";
import { useNavigate } from "react-router-dom";
const Blog = ({ singlePost }) => {
  const Navigate = useNavigate();
  return (
    <div className="boxes">
      {Data.map((data) => {
        const { id, title, img, description } = data;
        return (
          <div className="box" key={id} onClick={() => Navigate(`/blog/${id}`)}>
            <div className="image">
              <img src={require(`../../assets/images/${img}`)} alt={title} />
            </div>
            <div className="text">
              <h1>{title}</h1>
              {singlePost ? (
                <span>{description.slice(0, 120)}...</span>
              ) : (
                <span>{description.slice(0, 400)}...</span>
              )}{" "}
              <div className="buttons">
                <button className="btn" onClick={() => Navigate(`/blog/${id}`)}>
                  read more...
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
