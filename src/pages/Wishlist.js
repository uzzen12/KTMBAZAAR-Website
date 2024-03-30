import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/nirvana.jpg"
                    className="img-fluid w-100"
                    alt="nirvana"
                  />
                </div>
                <div py-3 px-3>
                  <h5 className="title">
                    Nirvana Worn Out Smiley Amplified Vintage Xl Charcoal
                  </h5>
                  <h6 className="price">Rs 1000</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/nirvana.jpg"
                    className="img-fluid w-100"
                    alt="nirvana"
                  />
                </div>
                <div py-3 px-3>
                  <h5 className="title">
                    Nirvana Worn Out Smiley Amplified Vintage Xl Charcoal
                  </h5>
                  <h6 className="price">Rs 1000</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/nirvana.jpg"
                    className="img-fluid w-100"
                    alt="nirvana"
                  />
                </div>
                <div py-3 px-3>
                  <h5 className="title">
                    Nirvana Worn Out Smiley Amplified Vintage Xl Charcoal
                  </h5>
                  <h6 className="price">Rs 1000</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
