import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import blog from "../images/blogshop1.jpg";
import Container from "../components/Container";
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" />
                Go back to Blogs
              </Link>
              <h3 className="title">
                Our Ultimate List: 101 Fashion Blog Post Ideas
              </h3>
              <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                quod saepe nostrum deleniti, est perferendis nam adipisci
                repudiandae, molestiae iure eius ducimus, laudantium esse quia
                assumenda quam neque quisquam ratione. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Perspiciatis, ex quia laborum
                labore at quod sed magni aliquid fuga inventore debitis,
                recusandae aperiam consequuntur adipisci asperiores eos sequi
                impedit accusantium.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
