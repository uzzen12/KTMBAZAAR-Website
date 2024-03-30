import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
             <div className="main-banner position-relative">
              <img 
                src="images/bannermain02.png" 
                className="img-fluid rounded-3" 
                alt="main banner" 
              />
              <div className="main-banner-content position-absolute">
                <h4>ALWAYS READY</h4>
                <h5>20% OFF</h5>
                <p>Womens jackets and dresses by Nike, Zara, Shein and m</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div> 
          </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img 
                    src="images/bannercat1.png" 
                    className="img-fluid rounded-3" 
                    alt="small banner" 
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>20% OFF</h5>
                    <p>
                      Womens jackets and dresses
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img 
                    src="images/bannercat2.png" 
                    className="img-fluid rounded-3" 
                    alt="small banner" 
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>BUY NEW</h5>
                    <p>
                      Womens jackets and dresses
                    </p>
                  </div>
                </div> 
                <div className="small-banner position-relative">
                  <img 
                    src="images/bannercat3.png" 
                    className="img-fluid rounded-3" 
                    alt="small banner" 
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>BUY NEW</h5>
                    <p>
                      Womens jackets and dresses
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img 
                    src="images/bannercat4.png" 
                    className="img-fluid rounded-3" 
                    alt="small banner" 
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>BUY NEW</h5>
                    <p>
                      Womens jackets and dresses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/shipping.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">For all orders over Rs. 1000</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/support.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Support available day or night</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/prices.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Lowest all around prices</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/offer.png" alt="services" />
                  <div>
                    <h6>Surprise offers everyday</h6>
                    <p className="mb-0">Save upto 25% ogg</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/payment.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">Shop without any worries</p>
                  </div>
                </div>  
              </div>  
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Bags</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/bags.jpg" alt="bags" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Jeans</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/jeans.jpg" alt="jeans" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>T-Shirt</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tshirt.jpg" alt="tshirt" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Hoodies</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/hoodie.jpg" alt="hoodie" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cap</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/cap.jpg" alt="cap" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Shoes</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/shoes.jpg" alt="shoes" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Sunglasses</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/sunglasses.jpg" alt="Sunglasses" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img 
                  src="images/bestdenimshirt.jpg" 
                  className="img-fluid" 
                  alt="denim shirt" 
                />
                <div className="famous-content position-absolute">
                <h5>Denim Shirt</h5>
                <h6>New line</h6>
                <p>Love the<br /> new you</p>
              </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img 
                  src="images/bestdenimshirt.jpg" 
                  className="img-fluid" 
                  alt="denim shirt" 
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Denim Shirt</h5>
                  <h6 className="text-dark">New line</h6>
                  <p className="text-dark">Love the<br /> new you</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img 
                  src="images/bestdenimshirt.jpg" 
                  className="img-fluid" 
                  alt="denim shirt" 
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Denim Shirt</h5>
                  <h6 className="text-dark">New line</h6>
                  <p className="text-dark">
                    Love the <br />
                    new you
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img 
                  src="images/bestdenimshirt.jpg" 
                  className="img-fluid" 
                  alt="denim shirt" 
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Denim Shirt</h5>
                  <h6 className="text-dark">New line</h6>
                  <p className="text-dark">
                    Love the <br />new you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
          <div className="col-12">
              <h3 className="section-heading">Limited Time Sale</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Best Sellers</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/adidaslogo.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/handmlogo.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/supremelogo.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/nikelogo.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/northfacelogo.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/raybanlogo.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/levislogo.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/guccilogo.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Latest Blogs</h3>
            </div>  
          </div>
          <div className="row">
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home