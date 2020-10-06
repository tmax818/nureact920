import React from "react";
import { Media } from "reactstrap";
import { Loading } from "./LoadingComponent";

import RenderPartner from "./RenderPartner";

const PartnerList = (props) => {
  console.log(props);
  const partners = props.partners.partners.map((partner) => {
    return (
      <Media tag="li" key={partner.id}>
        <RenderPartner partner={partner} />
      </Media>
    );
  });
  if (props.partners.isLoading) {
    return (
      <div className="col">
        <Loading />
      </div>
    );
  }
  if (props.partners.errMess) {
    return <h4>{(props.partners.isLoading, props.partners.errMess)}</h4>;
  }
  return (
    <div className="col mt-4">
      <Media list>{partners}</Media>
    </div>
  );
};
export default PartnerList;
