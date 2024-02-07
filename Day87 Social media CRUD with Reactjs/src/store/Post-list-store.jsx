import React, { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import Animi from "../assets/animi.jpg";
const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const PostListStore = ({ children }) => {
  const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if (action.type === "Delete_post") {
      newPostList = currentPostList.filter(
        (post) => post.id !== action.payload.postId
      );
    } else if (action.type === "Add_post") {
      newPostList = [action.payload, ...currentPostList];
    }
    return newPostList;
  };

  const addPost = (userId, title, body, reaction, tags) => {
    dispatchedPostList({
      type: "Add_post",
      payload: {
        id: uuidv4().slice(0, 4),
        title,
        body,
        reactionsNo: reaction,
        userId,
        tags,
        img: Animi,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchedPostList({
      type: "Delete_post",
      payload: {
        postId,
      },
    });
  };

  const [postList, dispatchedPostList] = useReducer(
    postListReducer,
    default_post_list
  );

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};
const PostStore = () => {
  return useContext(PostListContext);
};
const default_post_list = [
  {
    id: "1",
    title: "Going to Gilgit",
    body: "Hi friends i am going to Gilgit",
    reactionsNo: 0,
    userId: "user-9",
    tags: ["Travel", "Vocation", "Gilgit", "Enjoy"],
    img: Animi,
  },
  {
    id: "2",
    title: "passed Css",
    body: "I passed Css hurray",
    reactionsNo: 15,
    userId: "user-12",
    tags: ["css", "targetAchived", "unblevable", "Enjoy"],
    img: Animi,
  },
];
export { PostListStore, PostStore };
