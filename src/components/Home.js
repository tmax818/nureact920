import React from "react";
import RenderCard from "./RenderCard";

const Home = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md m-1">
          <RenderCard
            item={props.campsite}
            isLoading={props.campsitesLoading}
            errMess={props.campsitesErrMess}
          />
        </div>
        <div className="col-md m-1">
          <RenderCard
            item={props.promotion}
            isLoading={props.promotionLoading}
            errMess={props.promotionErrMess}
          />
        </div>
        <div className="col-md m-1">
          <RenderCard
            item={props.partner}
            isLoading={props.partnerLoading}
            errMess={props.partnerErrMess}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
