import React, { useRef } from "react";
import { PostStore } from "../store/Post-list-store";

const Createpost = () => {
  const userIdElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();

  const { addPost } = PostStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split("");

    addPost(userId, title, body, reaction, tags);

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";
  };
  return (
    <form className=" container w-75 mt-4" onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <label htmlFor="exampleUserId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputTitle"
          aria-describedby="Title of post"
          placeholder="Who are you..."
          ref={userIdElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          People Reaction
        </label>
        <input
          type="text"
          className="form-control"
          id="reaction"
          placeholder="No of Reactions..."
          ref={reactionElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="Tags"
          placeholder="Please enter Tags with Space..."
          ref={tagsElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputTitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputTitle"
          aria-describedby="Title of post"
          placeholder="How are you feeling today..."
          ref={titleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputBody" className="form-label">
          Body
        </label>
        <textarea
          type="text"
          className="form-control "
          id="exampleInputBody"
          placeholder="Tell us more about you..."
          rows={8}
          ref={bodyElement}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post Now
      </button>
    </form>
  );
};

export default Createpost;
