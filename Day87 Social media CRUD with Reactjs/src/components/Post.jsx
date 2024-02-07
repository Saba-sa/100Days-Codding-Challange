import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostStore } from "../store/Post-list-store";
const Post = ({ item }) => {
  const { id, img, body, title, tags, reactionsNo } = item;
  const { deletePost } = PostStore();
  return (
    <div className="card" style={{ width: "30rem" }}>
      <img src={img} className="card-img-top w-50" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <AiFillDelete onClick={() => deletePost(id)} />
        </span>
        <p className="card-text">{body}</p>
        <div className="alert  alert-success border-0">
          The post got {reactionsNo} people reactions
        </div>
        {tags.map((tag, index) => {
          return (
            <span key={index} className="badge text-bg-primary m-2">
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
