import React from "react";

import { Media } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";

export const RenderPartner = ({ partner }) => {
  if (partner) {
    return (
      <React.Fragment>
        <Media
          object
          src={baseUrl + partner.image}
          alt={partner.name}
          width="150"
        />
        <Media body className="ml-5 mb-4">
          <Media heading>{partner.name}</Media>
          {partner.description}
        </Media>
      </React.Fragment>
    );
  }
  return <div></div>;
};
export default RenderPartner;
