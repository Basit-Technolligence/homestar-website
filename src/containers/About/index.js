import React from "react";
import "./style.css";
import Cards from "../../components/Cards";
import { FaBullhorn, FaUsers } from "react-icons/fa";
const About = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto text-center">
          <h3 className="h3">
            Homestar is your online store for buying all daily use product
            within the boundaries of your home
          </h3>
          <p className="mt-3 lead">
            Homestar is an e-commerce company offering a wide range of high
            quality products. We do our best to meet our clients’ expectations
            in quality standards and service through continuous improvement and
            customer interaction. Our creative team works hardly to ensure that
            our clients get only the best quality products.
          </p>
        </div>
      </div>
      <div className="row justify-content-center mb-5 ">
        <Cards
          title="Who are we?"
          detail="Homestar is a multinational e-commerce corporation based in Kingdom of Saudi Arabia."
        >
          <FaUsers size="40px" />
        </Cards>
        <Cards
          title="Mission"
          detail="Offer a wide range of well-designed, quality home products at prices so low that everyone afford them."
        >
          <FaBullhorn size="40px" />
        </Cards>
      </div>
      <div className="row mb-5">
        <div className="col-md-8 mx-auto pt-4 pb-4 ceo-div">
          <div className="row">
            <div className="col-md-7 text-center  my-auto">
              <p className="m-5">
                “We see our customers as invited guests to a party, and we are
                the hosts. It’s our job every day to make every important aspect
                of the customer experience a little bit better.”
              </p>
              <h4>Adnan Majeed</h4>
              <p>CEO, Homestar</p>
            </div>
            <div className="col-md-5">
              <img
                className=""
                src={require("../../images/original-ceo.jpg")}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
