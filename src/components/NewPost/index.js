import React, { useState } from "react";
import "./newPost.css";

function NewPost() {
  let initialState = {
    name: "",
    location: "",
    title: "",
    content: "",
    type: "",
  };
  const [formState, setFormState] = useState(initialState);

  function handleChange(e) {
    const newName = e.target.name;
    const newValue = e.target.value;
    setFormState({ ...formState, [newName]: newValue });
  }

  async function handleClick() {
    const res = await fetch(`http://localhost:5000/posts`, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: formState.name,
        title: formState.title,
        location: formState.location,
        content: formState.content,
      }),
    });
    console.log(formState);
  }

  function handleOptionChange(e) {
    e.persist();

    setFormState({ ...formState, type: e.target.value });
  }

  return (
    <>
      <div className="App">
        <h2 style={{ marginTop: "-50px" }}>New Post</h2>
        <div className="inputWrapper">
          <input
            placeholder="Name"
            onChange={handleChange}
            name="name"
            value={formState.name}
          />
          <input
            placeholder="Location"
            onChange={handleChange}
            name="location"
            value={formState.location}
          />
          <input
            placeholder="Title"
            onChange={handleChange}
            name="title"
            value={formState.title}
          />
          <select onChange={handleOptionChange}>
            <option value="Offer">Offer</option>
            <option value="Request">Request</option>
          </select>
          <textarea
            placeholder="Post Content"
            onChange={handleChange}
            name="content"
            value={formState.content}
          />

          <button className="postButton" onClick={handleClick}>
            Post
          </button>
        </div>
      </div>
    </>
  );
}

export default NewPost;
