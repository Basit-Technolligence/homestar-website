import React from "react";
import "./style.css";
import ParallaxDiv from "../../components/ParallaxDiv";
import MarketPlaces from "../../components/MarketPlaces";
import Cards from "../../components/Cards";
import Counters from "../Counters";
import {
  FaFacebookF,
  FaInstagram,
  FaAmazon,
  FaLandmark,
  FaBuilding,
  FaMosque,
} from "react-icons/fa";

const Home = () => {
  return (
    <>
      <ParallaxDiv />
      <MarketPlaces h1="MARKET PLACES" h2="Sell">
        <Cards
          title="Amazon"
          detail="Amazon is an American multinational technology company based in Seattle that focuses on e-commerce."
        >
          <FaAmazon size="40px" />
        </Cards>
        <Cards
          title="Facebook"
          detail="Facebook is a social media corporation based California which can use as online storing."
        >
          <FaFacebookF size="40px" />
        </Cards>
        <Cards
          title="Instagram"
          detail="Instagram is social networking service owned by Facebook, great place for online stores."
        >
          <FaInstagram size="40px" />
        </Cards>
      </MarketPlaces>
      <Counters />
      <MarketPlaces h2="Exist">
        <Cards
          title="USA"
          detail="USA consumers will spend $709.78 billion on ecommerce in 2020, 18.0% more than 2019"
        >
          <FaLandmark size="40px" />
        </Cards>
        <Cards
          title="UAE"
          detail="Revenue in the UAE eCommerce market is projected to reach $5,321 million in 2020."
        >
          <FaBuilding size="40px" />
        </Cards>
        <Cards
          title="KSA"
          detail="Revenue in the KSA eCommerce market is projected to reach $6,076 million in 2020."
        >
          <FaMosque size="40px" />
        </Cards>
      </MarketPlaces>
    </>
  );
};

export default Home;
