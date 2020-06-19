import React, { useState, useEffect } from "react";
import "./posts.css";

const dummyData = [
  { title: "Hello World", content: "Wagwan Chaps", location: "Birmingham" },
  { title: "Beans", content: "On Toast", location: "Birmingham" },
  { title: "ThunderStruck", content: "Best Team", location: "Birmingham" },
];

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const res = await fetch(`http://localhost:5000/posts`);
      const data = await res.json();

      setPosts(data);
    }
    getPosts();
  }, []);
  console.log(posts);
  return (
    <div>
      {posts.map((item) => {
        return (
          <div className="post">
            <h3>{item.title}</h3>
            <img src="https://image.flaticon.com/icons/svg/67/67347.svg" />
            <small>{item.location}</small>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
