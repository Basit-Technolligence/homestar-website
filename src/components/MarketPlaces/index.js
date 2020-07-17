import React from "react";
import "./style.css";

const MarketPlaces = (props) => {
  return (
    <div className="main container-fluid">
      <div className="title row">
        <div className="col-md-12">
          <p className="h1">{props.h1}</p>
          <p className="h2">
            <strong>Where We</strong> {props.h2}
          </p>
        </div>
      </div>
      <div className="row">{props.children}</div>
    </div>
  );
};

export default MarketPlaces;
