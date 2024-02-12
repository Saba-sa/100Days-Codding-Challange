import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";
import { v4 as uuidv4 } from "uuid";
import Animi from "../assets/animi.jpg";
const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  add_initial_Post: () => {},
});

const PostListStore = ({ children }) => {
  const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if (action.type === "Delete_post") {
      newPostList = currentPostList.filter(
        (post) => post.id !== action.payload.postId
      );
    } else if (action.type === "Add_initial_post") {
      newPostList = action.payload.posts;
    } else if (action.type === "Add_post") {
      newPostList = [action.payload, ...currentPostList];
    }
    return newPostList;
  };

  const add_initial_Post = (posts) => {
    dispatchedPostList({
      type: "Add_initial_post",
      payload: { posts },
    });
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

  const deletePost = useCallback(
    (postId) => {
      dispatchedPostList({
        type: "Delete_post",
        payload: {
          postId,
        },
      });
    },
    [dispatchedPostList]
  );

  const [postList, dispatchedPostList] = useReducer(postListReducer, []);

  return (
    <PostListContext.Provider
      value={{ postList, add_initial_Post, addPost, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};
const PostStore = () => {
  return useContext(PostListContext);
};

export { PostListStore, PostStore };
