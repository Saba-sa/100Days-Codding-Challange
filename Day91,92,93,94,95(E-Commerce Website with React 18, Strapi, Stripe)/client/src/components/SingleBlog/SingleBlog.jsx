import React from "react";
import { Data } from "./Data";
import { useParams } from "react-router-dom";
import "./SingleBlog.scss";
import Blog from "./Blog";
const SingleBlog = () => {
  const { id } = useParams();
  const BlogPost = Data.filter((data) => data.id === parseInt(id));
  const { img, title, description } = BlogPost[0];
  console.log(BlogPost, id, title);
  return (
    <div className="blog-container">
      <div className="blog-content">
        <div className="left">
          <h1>{title}</h1>
          <p>{description}</p>
          <img src={require(`../../assets/images/${img}`)} alt={title} />
        </div>
        <div className="right">
          <Blog singlePost={true} />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
