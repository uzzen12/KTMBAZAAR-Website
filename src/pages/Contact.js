import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { LiaHomeSolid, LiaMailBulkSolid } from "react-icons/lia";
import { PiPhoneCall, PiInfo } from "react-icons/pi";
import Container from "../components/Container";
const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1285.4310094826392!2d85.32596532669567!3d27.70971691146245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19091da0e19b%3A0xc4598923d9d99381!2sCity%20Centre!5e0!3m2!1sen!2snp!4v1709929923049!5m2!1sen!2snp"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Connect with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <LiaHomeSolid className="fs-5" />
                      <address className="mb-0">
                        City Centre, Shop No. 7 Pashupati RD, Kamal Pokhari,
                        Kathmandu, Nepal
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <PiPhoneCall className="fs-5" />
                      <a href="tel:+977 9845662255">+977 9845662255</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <LiaMailBulkSolid className="fs-5" />
                      <a href="mailto:ktmbazaar7@gmail.com">
                        ktmbazaar7@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <PiInfo className="fs-5" />
                      <p className="mb-0">Sunday-Friday 9AM-10PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
