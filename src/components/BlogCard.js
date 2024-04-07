import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-images">
        <img
          src="images/blogshop1.jpg"
          className="img-fluid w-100"
          alt="blog"
        />
      </div>
      <div className="blog-content">
        <p className="date">21 Feb, 2024</p>
        <h5 className="title">
          Our Ultimate List: 101 Fashion Blog Post Ideas
        </h5>
        <p className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
