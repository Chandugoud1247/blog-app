import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Post = forwardRef(({ title, date, description, imageUrl }, ref) => {
  const postRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      postRef.current.focus();
    },
  }));

  return (
    <div className="post" tabIndex={0} ref={postRef}>
      <img className="postImg" src={imageUrl} alt={title} />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat"></span>
        </div>
        <span className="postTitle">{title}</span>
        <hr />
        <span className="postDate">{date}</span>
      </div>
      <p className="postDesc">{description}</p>
    </div>
  );
});

export default Post;
