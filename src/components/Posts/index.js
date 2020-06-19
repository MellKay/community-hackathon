import React, { useState, useEffect } from "react";
import "./posts.css";
import { Link } from "react-router-dom";

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
          <Link to={`/${item.id}`} className="links">
            <div className="post">
              <h3>{item.title}</h3>
              <img
                src="https://image.flaticon.com/icons/svg/67/67347.svg"
                alt="location icon"
              />
              <small>{item.location}</small>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Posts;
