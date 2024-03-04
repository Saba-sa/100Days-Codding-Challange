import React from "react";
import "./About.scss";
import Blog from "../SingleBlog/Blog.jsx";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="top-content">
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            ipsam enim beatae molestiae soluta doloribus esse, repellat amet
            cupiditate odio assumenda iusto iste deserunt officiis maxime
            suscipit. Eveniet doloribus quod ducimus cum ipsam accusantium
            consequatur modi fuga. Eum, ipsa veniam illo iusto praesentium, amet
            maiores itaque placeat, distinctio magnam quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            ipsam enim beatae molestiae soluta doloribus esse, repellat amet
            cupiditate odio assumenda iusto iste deserunt officiis maxime
            suscipit. Eveniet doloribus quod ducimus cum ipsam accusantium
            consequatur modi fuga. Eum, ipsa veniam illo iusto praesentium, amet
            maiores itaque placeat, distinctio magnam quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            ipsam enim beatae molestiae soluta doloribus esse, repellat amet
            cupiditate odio assumenda iusto iste deserunt officiis maxime
            suscipit. Eveniet doloribus quod ducimus cum ipsam accusantium
            consequatur modi fuga. Eum, ipsa veniam illo iusto praesentium, amet
            maiores itaque placeat, distinctio magnam quibusdam.
          </p>
        </div>
        <div className="blogs-content">
          <h1>Blogs</h1>
          <Blog />
        </div>
      </div>
    </div>
  );
};
export default About;
