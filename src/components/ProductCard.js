import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();

  return (
    <>
        <div 
            className={` ${
                location.pathname == "/store" ? `gr-${grid}`: "col-3"
            } `}
        >
        <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                    <img src="images/wish.svg" alt="wishlist" />
                </Link>
            </div>
            <div className="product-image">
                <img 
                    src="images/watches.jpg" 
                    className="img-fluid" 
                    alt="product image" 
                />
                <img 
                    src="images/watches1.jpg" 
                    className="img-fluid" 
                    alt="product image" 
                />
            </div>
            <div className="product-details">
                <h6 className="brand">Adidas</h6>
                <h5 className="product-title">
                    watch that suits your every look
                </h5>
                <ReactStars 
                    count={5} 
                    size={24} 
                    value={4} 
                    edit={false} 
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat, sequi 
                    illo cum delectus nobis nihil dicta distinctio commodi, 
                    totam quos est, doloribus earum at molestias 
                    perferendis architecto reiciendis. Mollitia.
                </p>
                <p className="price">Rs. 1000</p>
            </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                            <img src="images/prodcompare.svg" alt="compare" />
                        </Link>
                        <Link>
                            <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link>
                            <img src="images/add-cart.svg" alt="add cart" />
                        </Link>
                    </div>
            </div>
        </Link>
    </div>
    <div 
        className={` ${
            location.pathname == "/store" ? `gr-${grid}`: "col-3"
        } `}
    >
        <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                    <img src="images/wish.svg" alt="wishlist" />
                </Link>
            </div>
            <div className="product-image">
                <img 
                    src="images/watches.jpg" 
                    className="img-fluid" 
                    alt="product image" 
                />
                <img 
                    src="images/watches1.jpg" 
                    className="img-fluid" 
                    alt="product image" 
                />
            </div>
            <div className="product-details">
                <h6 className="brand">Adidas</h6>
                <h5 className="product-title">
                    watch that suits your every look
                </h5>
                <ReactStars 
                    count={5} 
                    size={24} 
                    value={4} 
                    edit={false} 
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat, sequi 
                    illo cum delectus nobis nihil dicta distinctio commodi, 
                    totam quos est, doloribus earum at molestias 
                    perferendis architecto reiciendis. Mollitia.
                </p>
                <p className="price">Rs. 1000</p>
            </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                            <img src="images/prodcompare.svg" alt="compare" />
                        </Link>
                        <Link>
                            <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link>
                            <img src="images/add-cart.svg" alt="add cart" />
                        </Link>
                    </div>
            </div>
        </Link>
    </div>
    </>
  );
};

export default ProductCard