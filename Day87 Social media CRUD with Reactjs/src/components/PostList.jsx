import React, { useEffect, useState } from "react";
import Post from "./Post";
import WelcomeMsg from "./WelcomeMsg";
import { PostStore } from "../store/Post-list-store";
import Loading from "./Loading";
const PostList = () => {
  const { postList, add_initial_Post } = PostStore();
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);

    fetch("https://dummyjson.com/posts", { signal: signal })
      .then((response) => response.json())
      .then((data) => {
        add_initial_Post(data.posts);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      controller.abort();
    };
  }, []);
  if (fetching) {
    return (
      <div className="d-flex gap-4 m-4 flex-wrap">
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="d-flex gap-4 m-4 flex-wrap">
        {fetching && <Loading />}
        {postList.length > 0 ? (
          postList.map((item) => {
            return <Post key={item.id} item={item} />;
          })
        ) : (
          <WelcomeMsg />
        )}
      </div>
    );
  }
};

export default PostList;
