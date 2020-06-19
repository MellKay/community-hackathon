import React, { useState, useEffect } from "react";
import "../Posts/posts.css";
import { useParams } from "react-router-dom";

const dummyData = [
  { title: "Hello World", content: "Wagwan Chaps", location: "Birmingham" },
  { title: "Beans", content: "On Toast", location: "Birmingham" },
  { title: "ThunderStruck", content: "Best Team", location: "Birmingham" },
];

function IndividualPost() {
  const [postData, setPost] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function getPost() {
      const res = await fetch(`http://localhost:5000/posts/${id}`);
      const data = await res.json();

      setPost(data);
    }
    getPost();
  }, []);
  return (
    <div>
      <div className="post">
        <h3>{postData.title}</h3>
        <img
          src="https://image.flaticon.com/icons/svg/67/67347.svg"
          alt="location icon"
        />
        <small>{postData.location}</small>
        <p> {postData.content}</p>
      </div>
    </div>
  );
}

export default IndividualPost;
