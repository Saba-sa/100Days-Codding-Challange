import React from "react";
import Post from "./Post";
import { PostStore } from "../store/Post-list-store";
const PostList = () => {
  const { postList } = PostStore();
  return (
    <div className="d-flex gap-4 m-4 flex-wrap">
      {postList.map((item) => {
        return <Post key={item.id} item={item} />;
      })}
    </div>
  );
};

export default PostList;
