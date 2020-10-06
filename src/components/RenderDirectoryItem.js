import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";

const RenderDirectoryItem = ({ campsite }) => {
  console.log(campsite);
  return (
    <Card>
      <Link to={`/directory/${campsite.id}`}>
        <CardImg
          width="100%"
          src={baseUrl + campsite.image}
          alt={campsite.name}
        />
        <CardImgOverlay>
          <CardTitle>{campsite.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
};
export default RenderDirectoryItem;
