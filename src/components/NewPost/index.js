import React from "react";
import "./newPost.css";

function NewPost() {
  return (
    <>
      <div className="App">
        <div className="inputWrapper">
          <input placeholder="Name" />
          <input placeholder="Location" />
          <input placeholder="Title" />
          <textarea placeholder="Post Content" />
        </div>
      </div>
    </>
  );
}

export default NewPost;
