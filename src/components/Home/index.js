import React from "react";
import Posts from "../Posts";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to="/newPost">
        <p className="new"> New Post</p>
      </Link>
      <div className="App">
        <div>
          <h2> Posts From the Community</h2>
          <Posts />
        </div>
      </div>
    </>
  );
}

export default Home;
